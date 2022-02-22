export class admin {
  public admin_id:number = 0;
  public admin_name:string = "";
  public admin_account:string = "";
  public admin_password:string = "";

  constructor(id:number, name:string, account:string, password:string){
    this.admin_id = id;
    this.admin_name = name;
    this.admin_account = account;
    this.admin_password = password;
  }
}
