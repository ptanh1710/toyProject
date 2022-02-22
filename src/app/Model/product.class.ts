export class Product {
  public product_id : number = 0;
  public product_name: string ="";
  public product_img: string = "";
  public product_price: number = 0;
  public product_desc: string="";
  public category_id: number = 0;
  public category_name: string = "";
  public brand_id: number = 0;
  public brand_name: string = "";

  constructor(id: number, name:string, img:string, price:number, desc: string, cateId: number, cateName: string, brandId:number, brandName:string) {
    this.product_id = id;
    this.product_name = name;
    this.product_img = img;
    this.product_price = price;
    this.product_desc = desc;
    this.category_id = cateId;
    this.category_name = cateName;
    this.brand_id = brandId;
    this.brand_name = brandName;
  }
}
