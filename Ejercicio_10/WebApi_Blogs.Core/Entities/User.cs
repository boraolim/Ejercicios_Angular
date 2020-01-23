namespace APIBlogs.Core
{

  using Utilities;

  public class User
  {
    [DataNames("idUser", "idUser")]
    public int idUser { get; set; }

    [DataNames("userName", "userName")]
    public string userName { get; set; }

    [DataNames("fechaAlta", "fechaAlta")]
    public string fechaAlta { get; set; }

    [DataNames("fechaActualizacion", "fechaActualizacion")]
    public string fechaActualizacion { get; set; }

    [DataNames("flgIsLogged", "flgIsLogged")]
    public bool flgIsLogged { get; set; }

    [DataNames("flgEliminado", "flgEliminado")]
    public bool flgEliminado { get; set; }
  }
}
