export class AppConstants {

  public static get baseServidor() : string {return "http://localhost:8080"}

  public static get login() : string {return this.baseServidor + "/login" }
}
