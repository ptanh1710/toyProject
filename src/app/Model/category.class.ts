export class category {
  public category_id: number = 0;
  public category_name: string = '';
  public category_note: string = '';

  constructor(id:number, name:string, note:string) {
    this.category_id = id;
    this.category_name = name;
    this.category_note = note;
  }
}
