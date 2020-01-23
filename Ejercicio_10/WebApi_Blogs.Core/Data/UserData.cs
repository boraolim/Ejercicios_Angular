namespace APIBlogs.Core
{
  using System.Data;
  using System.Text;
  using System.Linq;
  using System.Collections.Generic;
  using System.Runtime.CompilerServices;
  
  using Utilities;

  public class UserData
  {
    private static volatile UserData _Instance;
    private static readonly object syncRoot = new object();

    /// <summary>
    /// Constructor privado del objeto 'UserData'.
    /// </summary>
    /// <remarks>Inicia los atributos del objeto 'UserData'.</remarks>
    [MethodImpl(MethodImplOptions.Synchronized)]
    private UserData() { }

    /// <summary>
    /// Constructor del objeto 'UserData'.
    /// </summary>
    /// <remarks>Inicia los atributos del objeto 'UserData'.</remarks>
    public static UserData Instance
    {
      get
      {
        if (_Instance == null)
        {
          lock (syncRoot)
          {
            if (_Instance == null)
              _Instance = new UserData();
          }
        }
        return _Instance;
      }
    }

    // Mostrar una cuenta de usuario existente.
    public static User GetUser(string userName)
    {
      lock (syncRoot)
      {
        var _oSb = new StringBuilder();
        var _oLst = new User();
        var _oParam = new List<System.Data.IDbDataParameter>();

        _oSb.Clear().AppendFormat("SELECT t1.idUser, t1.userName, t1.fechaAlta, t1.fechaActualizacion, t1.flgIsLogged, t1.flgEliminado FROM [Blogs_Angular]..[mtUsuarios] t1 WHERE (t1.userName = @UserName);");

        using (var oDb = new DBManager(Utilerias.ConnectionString()))
        {
          _oParam.Add(oDb.CreateParameter("@UserName", userName, System.Data.DbType.String));
          _oLst = oDb.GetDataToMapping<User>(_oSb.ToString(), CommandType.Text, _oParam.ToArray()).Single();
        } // Fin de la conexión a Base de Datos.

        return _oLst;
      }
    }
  }
}
