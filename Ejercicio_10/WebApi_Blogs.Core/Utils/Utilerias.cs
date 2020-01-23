namespace APIBlogs.Core
{
  using System;
  using System.Configuration;
  using System.Runtime.CompilerServices;

  public class Utilerias
  {
    private static volatile Utilerias _Instance;
    private static readonly object syncRoot = new object();

    /// <summary>
    /// Constructor privado del objeto 'Utilerias'.
    /// </summary>
    /// <remarks>Inicia los atributos del objeto 'Utilerias'.</remarks>
    [MethodImpl(MethodImplOptions.Synchronized)]
    private Utilerias() { }

    /// <summary>
    /// Constructor del objeto 'Utilerias'.
    /// </summary>
    /// <remarks>Inicia los atributos del objeto 'Utilerias'.</remarks>
    public static Utilerias Instance
    {
      get
      {
        if (_Instance == null)
        {
          lock (syncRoot)
          {
            if (_Instance == null)
              _Instance = new Utilerias();
          }
        }
        return _Instance;
      }
    }

    /// <summary>
    /// Atributo que guarda la cadena de conexión a Base de Datos.
    /// </summary>
    /// <returns></returns>
    public static string ConnectionString()
    {
      lock (syncRoot)
      {
        return ConfigurationManager.ConnectionStrings["DbContexto"].Name;
      }
    }

    public static string JWT_Secret_Key()
    {
      lock (syncRoot)
      {
        return ConfigurationManager.AppSettings["JWT_Secret_Key"];
      }
    }

    public static string JWT_Audience_Token()
    {
      lock (syncRoot)
      {
        return ConfigurationManager.AppSettings["JWT_Audience_Token"];
      }
    }

    public static string JWT_Issuer_Token()
    {
      lock (syncRoot)
      {
        return ConfigurationManager.AppSettings["JWT_Issuer_Token"];
      }
    }

    public static short JWT_Expire_Minutes()
    {
      lock (syncRoot)
      {
        return Convert.ToInt16(ConfigurationManager.AppSettings["JWT_Expire_Minutes"].ToString());
      }
    }

  }
}
