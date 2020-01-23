namespace APIBlogs.Core
{
  using System.Linq;
  using System.Text;
  using System.Collections.Generic;
  using System.Runtime.CompilerServices;

  using Utilities;

  public class BlogData
  {
    private static volatile BlogData _Instance;
    private static readonly object syncRoot = new object();

    /// <summary>
    /// Constructor privado del objeto 'BlogData'.
    /// </summary>
    /// <remarks>Inicia los atributos del objeto 'BlogData'.</remarks>
    [MethodImpl(MethodImplOptions.Synchronized)]
    private BlogData() { }

    /// <summary>
    /// Constructor del objeto 'BlogData'.
    /// </summary>
    /// <remarks>Inicia los atributos del objeto 'BlogData'.</remarks>
    public static BlogData Instance
    {
      get
      {
        if (_Instance == null)
        {
          lock (syncRoot)
          {
            if (_Instance == null)
              _Instance = new BlogData();
          }
        }
        return _Instance;
      }
    }

    // Mostrar lista de blogs en Base de Datos.
    public static List<Blog> GetBlogs()
    {
      lock (syncRoot)
      {
        var _oSb = new StringBuilder();
        var _oLst = new List<Blog>();

        _oSb.Clear().AppendFormat("SELECT t1.idBlog, t1.comentarioBlog, t1.tipoComentario, t1.nombreProducto, ");
        _oSb.AppendFormat("t1.autorComentario, t1.fechaAlta, t1.fechaActualizacion, t1.flgPrioritario, t1.flgAlta, ");
        _oSb.AppendFormat("t1.flgEdicion, t1.flgEliminado FROM [Blogs_Angular]..[mtBlogs] t1;");

        using (var oDb = new DBManager(Utilerias.ConnectionString()))
        {
          _oLst = oDb.GetDataToMapping<Blog>(_oSb.ToString(), System.Data.CommandType.Text, null);
        } // Fin de la conexión a Base de Datos.

        return _oLst;
      }
    }

    // Mostrar un blog.
    public static Blog GetBlog(int id)
    {
      lock (syncRoot)
      {
        var _oSb = new StringBuilder();
        var _oLst = new Blog();
        var _oParam = new List<System.Data.IDbDataParameter>();

        _oSb.Clear().AppendFormat("SELECT t1.idBlog, t1.comentarioBlog, t1.tipoComentario, t1.nombreProducto, ");
        _oSb.AppendFormat("t1.autorComentario, t1.fechaAlta, t1.fechaActualizacion, t1.flgPrioritario, t1.flgAlta, ");
        _oSb.AppendFormat("t1.flgEdicion, t1.flgEliminado FROM [Blogs_Angular]..[mtBlogs] t1 where (t1.idBlog = @IdBlog);");

        using (var oDb = new DBManager(Utilerias.ConnectionString()))
        {
          _oParam.Add(oDb.CreateParameter("@IdBlog", id, System.Data.DbType.Int64));
          _oLst = oDb.GetDataToMapping<Blog>(_oSb.ToString(), System.Data.CommandType.Text, _oParam.ToArray()).Single();
        } // Fin de la conexión a Base de Datos.

        return _oLst;
      }
    }

    // Agregar un blog nuevo.
    public static List<Blog> AddBlog(Blog obj)
    {
      lock (syncRoot)
      {
        var _oSb = new StringBuilder();
        var _oLst = new List<Blog>();
        var _oParam = new List<System.Data.IDbDataParameter>();

        _oSb.Clear().AppendFormat("INSERT INTO [Blogs_Angular]..[mtBlogs] ");
        _oSb.AppendFormat("SELECT @comentarioBlog, @tipoComentario, @nombreProducto, ");
        _oSb.AppendFormat("@autorComentario, getdate(), null, @flgPrioritario, 1, 0, 0; ");
        _oSb.AppendFormat("SELECT t1.idBlog, t1.comentarioBlog, t1.tipoComentario, t1.nombreProducto, ");
        _oSb.AppendFormat("t1.autorComentario, t1.fechaAlta, t1.fechaActualizacion, t1.flgPrioritario, t1.flgAlta, ");
        _oSb.AppendFormat("t1.flgEdicion, t1.flgEliminado FROM [Blogs_Angular]..[mtBlogs] t1;");

        using (var oDb = new DBManager(Utilerias.ConnectionString()))
        {
          _oParam.Add(oDb.CreateParameter("@comentarioBlog", obj.comentarioBlog, System.Data.DbType.String));
          _oParam.Add(oDb.CreateParameter("@tipoComentario", obj.tipoComentario, System.Data.DbType.String));
          _oParam.Add(oDb.CreateParameter("@nombreProducto", obj.nombreProducto, System.Data.DbType.String));
          _oParam.Add(oDb.CreateParameter("@autorComentario", obj.autorComentario, System.Data.DbType.String));
          _oParam.Add(oDb.CreateParameter("@flgPrioritario", obj.flgPrioritario, System.Data.DbType.Boolean));

          _oLst = oDb.GetDataToMapping<Blog>(_oSb.ToString(), System.Data.CommandType.Text, _oParam.ToArray());
        } // Fin de la conexión a Base de Datos.

        return _oLst;
      }
    }

    // Eliminar un blog existente.
    public static List<Blog> DeleteBlog(Blog obj)
    {
      lock (syncRoot)
      {
        var _oSb = new StringBuilder();
        var _oLst = new List<Blog>();
        var _oParam = new List<System.Data.IDbDataParameter>();

        _oSb.Clear().AppendFormat("UPDATE [Blogs_Angular]..[mtBlogs] ");
        _oSb.AppendFormat("SET flgEliminado = 1 ");
        _oSb.AppendFormat("WHERE idBlog = @IdBlog; ");
        _oSb.AppendFormat("SELECT t1.idBlog, t1.comentarioBlog, t1.tipoComentario, t1.nombreProducto, ");
        _oSb.AppendFormat("t1.autorComentario, t1.fechaAlta, t1.fechaActualizacion, t1.flgPrioritario, t1.flgAlta, ");
        _oSb.AppendFormat("t1.flgEdicion, t1.flgEliminado FROM [Blogs_Angular]..[mtBlogs] t1;");

        using (var oDb = new DBManager(Utilerias.ConnectionString()))
        {
          _oParam.Add(oDb.CreateParameter("@IdBlog", obj.idBlog, System.Data.DbType.Int64));

          _oLst = oDb.GetDataToMapping<Blog>(_oSb.ToString(), System.Data.CommandType.Text, _oParam.ToArray());
        } // Fin de la conexión a Base de Datos.

        return _oLst;
      }
    }

    // Eliminar un blog existente.
    public static List<Blog> RestoreBlog(Blog obj)
    {
      lock (syncRoot)
      {
        var _oSb = new StringBuilder();
        var _oLst = new List<Blog>();
        var _oParam = new List<System.Data.IDbDataParameter>();

        _oSb.Clear().AppendFormat("UPDATE [Blogs_Angular]..[mtBlogs] ");
        _oSb.AppendFormat("SET flgEliminado = 0 ");
        _oSb.AppendFormat("WHERE idBlog = @IdBlog; ");
        _oSb.AppendFormat("SELECT t1.idBlog, t1.comentarioBlog, t1.tipoComentario, t1.nombreProducto, ");
        _oSb.AppendFormat("t1.autorComentario, t1.fechaAlta, t1.fechaActualizacion, t1.flgPrioritario, t1.flgAlta, ");
        _oSb.AppendFormat("t1.flgEdicion, t1.flgEliminado FROM [Blogs_Angular]..[mtBlogs] t1;");

        using (var oDb = new DBManager(Utilerias.ConnectionString()))
        {
          _oParam.Add(oDb.CreateParameter("@IdBlog", obj.idBlog, System.Data.DbType.Int64));

          _oLst = oDb.GetDataToMapping<Blog>(_oSb.ToString(), System.Data.CommandType.Text, _oParam.ToArray());
        } // Fin de la conexión a Base de Datos.

        return _oLst;
      }
    }

    // Eliminar un blog existente.
    public static List<Blog> UpdateBlog(Blog obj)
    {
      lock (syncRoot)
      {
        var _oSb = new StringBuilder();
        var _oLst = new List<Blog>();
        var _oParam = new List<System.Data.IDbDataParameter>();

        _oSb.Clear().AppendFormat("UPDATE [Blogs_Angular]..[mtBlogs] ");
        _oSb.AppendFormat("SET comentarioBlog = @ComentarioBlog, ");
        _oSb.AppendFormat("tipoComentario = @tipoComentario, ");
        _oSb.AppendFormat("nombreProducto = @nombreProducto, ");
        _oSb.AppendFormat("autorComentario = @autorComentario, ");
        _oSb.AppendFormat("fechaActualizacion = getdate() ");
        _oSb.AppendFormat("WHERE (idBlog = @IdBlog); ");
        _oSb.AppendFormat("SELECT t1.idBlog, t1.comentarioBlog, t1.tipoComentario, t1.nombreProducto, ");
        _oSb.AppendFormat("t1.autorComentario, t1.fechaAlta, t1.fechaActualizacion, t1.flgPrioritario, t1.flgAlta, ");
        _oSb.AppendFormat("t1.flgEdicion, t1.flgEliminado FROM [Blogs_Angular]..[mtBlogs] t1;");

        using (var oDb = new DBManager(Utilerias.ConnectionString()))
        {
          _oParam.Add(oDb.CreateParameter("@IdBlog", obj.idBlog, System.Data.DbType.Int64));
          _oParam.Add(oDb.CreateParameter("@comentarioBlog", obj.comentarioBlog, System.Data.DbType.String));
          _oParam.Add(oDb.CreateParameter("@tipoComentario", obj.tipoComentario, System.Data.DbType.String));
          _oParam.Add(oDb.CreateParameter("@nombreProducto", obj.nombreProducto, System.Data.DbType.String));
          _oParam.Add(oDb.CreateParameter("@autorComentario", obj.autorComentario, System.Data.DbType.String));

          _oLst = oDb.GetDataToMapping<Blog>(_oSb.ToString(), System.Data.CommandType.Text, _oParam.ToArray());
        } // Fin de la conexión a Base de Datos.

        return _oLst;
      }
    }


  }
}
