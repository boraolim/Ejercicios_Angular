namespace APIBlogs
{
  using System;
  using System.Net;
  using System.Web.Http;
  using System.Web.Routing;

  using APIBlogs.Core;

  using Utilities;

  [Authorize]
  [RoutePrefix("api/blogs")]
  public class BlogController : ApiController
  {
    [HttpPost]
    [Route("blogsall")]
    public IHttpActionResult getblogs()
    {
      var _oRet = new GetObjectResponseModel();

      try
      {
        _oRet.IsSuccess = true;
        _oRet.Message = "Satisfactorio!!";
        _oRet.StatusCode = (int)HttpStatusCode.OK;
        _oRet.Data = BlogData.GetBlogs();
      }
      catch (Exception oEx)
      {
        _oRet.IsSuccess = false;
        _oRet.Message = "Error interno del servidor. Lamentamos las molestias ocasionadas. Favor de reportarlo al Administrador del Sistema. Detalle del error: " + oEx.Message.Trim();
        _oRet.StatusCode = (int)HttpStatusCode.InternalServerError;
      }


      // Finalmente retornamos el resultado.
      // _oDb = null; return Ok(JsonConvert.SerializeObject(_oRet, Formatting.None));
      return Ok(_oRet);
    }

    [HttpGet]
    [Route("blog/{id}")]
    public IHttpActionResult getblog([FromUri] int id)
    {
      var _oRet = new GetObjectResponseModel();

      try
      {
        var uu = BlogData.GetBlog(id);

        _oRet.IsSuccess = true;
        _oRet.Message = "Información del blog seleccionado devuelta satisfactoriamente.";
        _oRet.StatusCode = (int)HttpStatusCode.OK;
        _oRet.Data = uu;
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

    [HttpPost]
    [Route("agregablog")]
    public IHttpActionResult agregablog([FromUri] Blog Model)
    {
      DataResponseModel _oRet = new DataResponseModel();

      try
      {
        // Realizo el alta de usuario.
        var uu = BlogData.AddBlog(Model);

        _oRet.IsSuccess = true;
        _oRet.Message = "Alta del blog de manera satisfactoria.";
        _oRet.StatusCode = (int)HttpStatusCode.OK;
        _oRet.Data = uu;
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

    [HttpDelete]
    [Route("eliminablog")]
    public IHttpActionResult eliminablog([FromUri] Blog Model)
    {
      DataResponseModel _oRet = new DataResponseModel();

      try
      {
        // Realizo el alta de usuario.
        var uu = BlogData.DeleteBlog(Model);

        _oRet.IsSuccess = true;
        _oRet.Message = "Eliminación del blog de manera satisfactoria.";
        _oRet.StatusCode = (int)HttpStatusCode.OK;
        _oRet.Data = uu;
      }
      catch (Exception oEx)
      {
        _oRet.IsSuccess = false;
        _oRet.Message = "Error interno del servidor. Lamentamos las molestias ocasionadas. Favor de reportarlo al Administrador del Sistema. Detalle del error: " + oEx.Message.Trim();
        _oRet.StatusCode = (int)HttpStatusCode.InternalServerError;
      }

      // Finalmente retornamos el resultado.
      // _oDb = null; return Ok(JsonConvert.SerializeObject(_oRet, Formatting.None));
      return Ok(_oRet);
    }

    [HttpDelete]
    [Route("eliminablog/{id}")]
    public IHttpActionResult eliminablog([FromUri] int id)
    {
      DataResponseModel _oRet = new DataResponseModel();

      try
      {
        // Realizo el alta de usuario.
        var uu = BlogData.DeleteBlog(new Blog() { idBlog = id });

        _oRet.IsSuccess = true;
        _oRet.Message = "Eliminación del blog de manera satisfactoria.";
        _oRet.StatusCode = (int)HttpStatusCode.OK;
        _oRet.Data = uu;
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

    [HttpPut]
    [Route("actualizablog")]
    public IHttpActionResult actualizablog([FromUri] Blog Model)
    {
      DataResponseModel _oRet = new DataResponseModel();

      try
      {
        // Realizo el alta de usuario.
        var uu = BlogData.UpdateBlog(Model);

        _oRet.IsSuccess = true;
        _oRet.Message = "Actualización del blog de manera satisfactoria.";
        _oRet.StatusCode = (int)HttpStatusCode.OK;
        _oRet.Data = uu;
      }
      catch (Exception oEx)
      {
        _oRet.IsSuccess = false;
        _oRet.Message = "Error interno del servidor. Lamentamos las molestias ocasionadas. Favor de reportarlo al Administrador del Sistema. Detalle del error: " + oEx.Message.Trim();
        _oRet.StatusCode = (int)HttpStatusCode.InternalServerError;
      }

      // Finalmente retornamos el resultado.
      // _oDb = null; return Ok(JsonConvert.SerializeObject(_oRet, Formatting.None));
      return Ok(_oRet);
    }

    [HttpPatch]
    [Route("restaurarblog")]
    public IHttpActionResult restaurarblog([FromUri] Blog Model)
    {
      DataResponseModel _oRet = new DataResponseModel();

      try
      {
        // Realizo el alta de usuario.
        var uu = BlogData.RestoreBlog(Model);

        _oRet.IsSuccess = true;
        _oRet.Message = "Restauración del blog de manera satisfactoria.";
        _oRet.StatusCode = (int)HttpStatusCode.OK;
        _oRet.Data = uu;
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

    [HttpPatch]
    [Route("restaurarblog/{id}")]
    public IHttpActionResult restaurarblog([FromUri] int id)
    {
      DataResponseModel _oRet = new DataResponseModel();

      try
      {
        // Realizo el alta de usuario.
        var uu = BlogData.RestoreBlog(new Blog() { idBlog = id });

        _oRet.IsSuccess = true;
        _oRet.Message = "Restauración del blog de manera satisfactoria.";
        _oRet.StatusCode = (int)HttpStatusCode.OK;
        _oRet.Data = uu;
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

