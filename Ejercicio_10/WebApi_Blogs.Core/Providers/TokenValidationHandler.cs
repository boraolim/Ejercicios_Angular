namespace APIBlogs.Core
{
  using System;
  using System.Net;
  using System.Web;
  using System.Linq;
  using System.Text;
  using System.Net.Http;
  using System.Threading;
  using System.Threading.Tasks;
  using System.Collections.Generic;
    
  using Microsoft.IdentityModel.Tokens;
    

    public sealed class TokenValidationHandler : DelegatingHandler
  {
    private static bool TryRetrieveToken(HttpRequestMessage request, out string token)
    {
      token = null;
      IEnumerable<string> authzHeaders;
      if (!request.Headers.TryGetValues("Authorization", out authzHeaders) || authzHeaders.Count() > 1)
      {
        return false;
      }
      var bearerToken = authzHeaders.ElementAt(0);
      token = bearerToken.StartsWith("Bearer ") ? bearerToken.Substring(7) : bearerToken;
      return true;
    }

    protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
    {
      HttpStatusCode statusCode;
      string token;

      // determine whether a jwt exists or not
      if (!TryRetrieveToken(request, out token))
      {
        statusCode = HttpStatusCode.Unauthorized;
        return base.SendAsync(request, cancellationToken);
      }

      try
      {
        var secretKey = Utilerias.JWT_Secret_Key();
        var audienceToken = Utilerias.JWT_Audience_Token();
        var issuerToken = Utilerias.JWT_Issuer_Token();
        var securityKey = new SymmetricSecurityKey(Encoding.Default.GetBytes(secretKey));

        SecurityToken securityToken;
        var tokenHandler = new System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler();
        TokenValidationParameters validationParameters = new TokenValidationParameters()
        {
          ValidAudience = audienceToken,
          ValidIssuer = issuerToken,
          ValidateLifetime = true,
          ValidateIssuerSigningKey = true,
          LifetimeValidator = LifetimeValidator,
          IssuerSigningKey = securityKey
        };

        // Extract and assign Current Principal and user
        Thread.CurrentPrincipal = tokenHandler.ValidateToken(token, validationParameters, out securityToken);
        HttpContext.Current.User = tokenHandler.ValidateToken(token, validationParameters, out securityToken);

        return base.SendAsync(request, cancellationToken);
      }
      catch (SecurityTokenValidationException)
      {
        statusCode = HttpStatusCode.Unauthorized;
      }
      catch (Exception)
      {
        statusCode = HttpStatusCode.InternalServerError;
      }

      return Task<HttpResponseMessage>.Factory.StartNew(() => new HttpResponseMessage(statusCode) { });
    }

    public bool LifetimeValidator(DateTime? notBefore, DateTime? expires, SecurityToken securityToken, TokenValidationParameters validationParameters)
    {
      if (expires != null)
      {
        if (DateTime.UtcNow < expires) return true;
      }
      return false;
    }
  }
}
