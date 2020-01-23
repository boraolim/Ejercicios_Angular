namespace APIBlogs
{
  using System.Web.Http;
  
  using Newtonsoft.Json;
  using APIBlogs.Core;

  public static class WebApiConfig
  {
    public static void Register(HttpConfiguration config)
    {
       // Configuración y servicios de API web

       // Rutas de API web
       config.MapHttpAttributeRoutes();
      config.MessageHandlers.Add(new TokenValidationHandler());
      config.Routes.MapHttpRoute("DefaultApi", "api/{controller}/{id}", new { id = RouteParameter.Optional });
       config.Formatters.JsonFormatter.SerializerSettings = new JsonSerializerSettings();
    }
  }
}
