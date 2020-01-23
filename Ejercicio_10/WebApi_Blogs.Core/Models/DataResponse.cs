namespace APIBlogs.Core
{
  using System;

  // Información de la cuenta de usuario autenticada.
  [Serializable]
  public class DataResponseModel
  {
    public bool IsSuccess { get; set; }
    public int StatusCode { get; set; }
    public string Message { get; set; }
    public object Data { get; set; }
  }

  public class UserResponseModel
  {
    public bool IsSuccess { get; set; }
    public int StatusCode { get; set; }
    public string UserName { get; set; }
    public string Message { get; set; }
    public string AccessToken { get; set; }
    public string ExpiresIn { get; set; }
  }
}