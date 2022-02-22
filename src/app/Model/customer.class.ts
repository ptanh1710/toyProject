export class customer {
  public customer_id: number = 0;
  public customer_name: string = '';
  public customer_account: string = '';
  public customer_password: string = '';

  constructor(id:number, name:string, account:string, password:string) {
    this.customer_id = id;
    this.customer_name = name;
    this.customer_account = account;
    this.customer_password = password;
  }
}
