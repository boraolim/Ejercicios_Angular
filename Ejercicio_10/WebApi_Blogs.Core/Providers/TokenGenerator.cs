using System;
using System.Configuration;
namespace APIBlogs.Core
{
  using System.Security.Claims;
  using Microsoft.IdentityModel.Tokens;

  /// <summary>
  /// JWT Token generator class using "secret-key"
  /// more info: https://self-issued.info/docs/draft-ietf-oauth-json-web-token.html
  /// </summary>
  public class TokenGenerator
  {
    public static string GenerateTokenJwt(string username)
    {
      // appsetting for Token JWT
      var secretKey = Utilerias.JWT_Secret_Key();
      var audienceToken = Utilerias.JWT_Audience_Token();
      var issuerToken = Utilerias.JWT_Issuer_Token();
      var expireTime = Utilerias.JWT_Expire_Minutes();

      var securityKey = new SymmetricSecurityKey(System.Text.Encoding.Default.GetBytes(secretKey));
      var signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature);

      // create a claimsIdentity
      ClaimsIdentity claimsIdentity = new ClaimsIdentity(new[] { new Claim(ClaimTypes.Name, username) });

      // create token to the user
      var tokenHandler = new System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler();
      var jwtSecurityToken = tokenHandler.CreateJwtSecurityToken(
          audience: audienceToken,
          issuer: issuerToken,
          subject: claimsIdentity,
          notBefore: DateTime.UtcNow,
          expires: DateTime.UtcNow.AddMinutes(Convert.ToInt32(expireTime)),
          signingCredentials: signingCredentials);

      var jwtTokenString = tokenHandler.WriteToken(jwtSecurityToken);
      return jwtTokenString;
    }
  }
}