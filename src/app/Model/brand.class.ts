export class brand {
  public brand_id: number = 0;
  public brand_name: string = '';
  public brand_desc: string = '';

  constructor(id:number, name:string, desc:string) {
    this.brand_id = id;
    this.brand_name = name;
    this.brand_desc = desc;
  }
}
