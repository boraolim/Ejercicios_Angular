namespace APIBlogs.Core
{
  using System;
  using System.Collections.Generic;

  using Utilities;

  public class Blog
  {
    [DataNames("idBlog", "idBlog")]
    public int idBlog { get; set; }

    [DataNames("comentarioBlog", "comentarioBlog")]
    public string comentarioBlog { get; set; }

    [DataNames("tipoComentario", "tipoComentario")]
    public string tipoComentario { get; set; }

    [DataNames("nombreProducto", "nombreProducto")]
    public string nombreProducto { get; set; }

    [DataNames("autorComentario", "autorComentario")]
    public string autorComentario { get; set; }

    [DataNames("fechaAlta", "fechaAlta")]
    public string fechaAlta { get; set; }

    [DataNames("fechaActualizacion", "fechaActualizacion")]
    public string fechaActualizacion { get; set; }

    [DataNames("flgPrioritario", "flgPrioritario")]
    public bool flgPrioritario { get; set; }

    [DataNames("flgAlta", "flgAlta")]
    public bool flgAlta { get; set; }

    [DataNames("flgEdicion", "flgEdicion")]
    public bool flgEdicion { get; set; }

    [DataNames("flgEliminado", "flgEliminado")]
    public bool flgEliminado { get; set; }
  }
}
