namespace APIBlogs
{
  using System;
  using System.Net;
  using System.Web.Http;
  using System.Web.Routing;

  using APIBlogs.Core;

  using Utilities;

  [AllowAnonymous]
  [RoutePrefix("api/users")]
  public class UserController : ApiController
  {
    [HttpPost]
    [Route("authorization/{username}")]
    public IHttpActionResult getblog([FromUri] string userName)
    {
      var _oRet = new UserResponseModel();

      try
      {
        var uu = UserData.GetUser(userName);

        if (uu != null)
        {
          _oRet.IsSuccess = true;
          _oRet.UserName = userName;
          _oRet.Message = "Autenticación de cuenta de usuario realizada satisfactoriamente.";
          _oRet.StatusCode = (int)HttpStatusCode.OK;
          _oRet.AccessToken = TokenGenerator.GenerateTokenJwt(userName);
          _oRet.ExpiresIn = DateTime.Now.AddMinutes(Utilerias.JWT_Expire_Minutes()).ToString("yyyy'-'MM'-'dd' 'HH':'mm':'ss");
        }
        else
        {
          _oRet.IsSuccess = false;
          _oRet.Message = "La cuenta de usuario " + userName + " no existe.";
          _oRet.StatusCode = (int)HttpStatusCode.BadRequest;
        }
      }
      catch (Exception oEx)
      {
        _oRet.IsSuccess = false;
        _oRet.Message = "Error interno del servidor. Lamentamos las molestias ocasionadas. Favor de reportarlo al Administrador del Sistema. Detalle del error: " + oEx.Message.Trim();
        _oRet.StatusCode = (int)HttpStatusCode.InternalServerError;
      }

      // Finalmente retornamos el resultado.
      return Ok(_oRet);
    }
  }
}
