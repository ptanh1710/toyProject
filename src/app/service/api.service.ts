import { Injectable , Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { customer } from 'src/app/Model/customer.class';
import { category } from '../Model/category.class';
import { brand } from '../Model/brand.class';
import { Product } from '../Model/product.class';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  redirectUrl: string ='';
  PHP_API_SERVER = 'http://localhost/api/Toy/';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }

  getCategoryList(){
    return this.http.get<any>(`${this.PHP_API_SERVER}/read_category.php`)
    .pipe(map((res:any) => {
      return res;
    }));
  }

  getBrandList(){
    return this.http.get<any>(`${this.PHP_API_SERVER}/read_brand.php`)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  getProductList(){
    return this.http.get<any>(`${this.PHP_API_SERVER}/read_product.php`)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  // Login User
  userlogin(customer_account:any, customer_password:any) {
    // alert(customer_account)
    return this.http.post<any>(this.PHP_API_SERVER + '/login.php', { customer_account, customer_password })
    .pipe(map((customer: customer[]) => {
      if (JSON.stringify(customer).length > 2) {
        this.setToken(customer);
        console.log(customer);
        alert('Đăng nhập thành công');

      }
      else {
        alert('Đăng nhập thất bại');
      }
      // console.log();
      this.getLoggedInName.emit(true);
      return customer;
    }));
  }

  userRegistration(customer_account:any,customer_name:any,customer_password:any) {
    return this.http.post<any>(this.PHP_API_SERVER + '/register.php', { customer_account,customer_password, customer_name })
    .pipe(map((customer: customer[]) => {
      return customer;
    }));
  }


    //token
  setToken(token: any) {
    if(token) {
      // sessionStorage.removeItem('token');
      sessionStorage.setItem('token',  JSON.stringify(token));
    }
    else {
      sessionStorage.getItem('token');
    }
    // console.log("...: "+token);

  }
  getToken() {
    const json = sessionStorage.getItem('token');
    if(json){
      // console.log(JSON.parse(json));
      return JSON.parse(json);
    }
    return null;
  }
  deleteToken() {
    sessionStorage.removeItem('token');
  }

  // Kiểm tra login hay chưa - front end
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }

  // Insert / Update
  // Category
  updateCategory(category_id: number, category_name:string, category_note:string) {
    return this.http.put(this.PHP_API_SERVER + 'category_update.php', { category_id, category_name, category_note },  {responseType: 'text'});
  }

  insertCategory(category_name:string, category_note:string) {
    // console.log(category_name)
    return this.http.post<any>(this.PHP_API_SERVER + 'category_add.php', { category_name, category_note })
    .pipe(map((category: category[]) => {
      return category;
    }));
  }

  // Brand
  updateBrand(brand_id: number, brand_name:string, brand_desc:string) {
    return this.http.put(this.PHP_API_SERVER + 'brand_update.php', { brand_id, brand_name, brand_desc },  {responseType: 'text'});
  }

  insertBrand(brand_name:string, brand_desc:string) {
    // console.log(brand_name)
    return this.http.post<any>(this.PHP_API_SERVER + 'brand_add.php', { brand_name, brand_desc })
    .pipe(map((brand: brand[]) => {
      return brand;
    }));
  }

  // Product
  insertProduct(product_name:string, product_img:string, product_price:number, category_id: number, brand_id:number , product_desc:string) {
    // console.log(product_name)
    return this.http.post<any>(this.PHP_API_SERVER + 'product_add.php', { product_name,product_img,product_price,category_id,brand_id, product_desc })
    .pipe(map((product: Product[]) => {
      return product;
    }));
  }

  updateProduct(product_id: number, product_name:string, product_img:string,product_price:number, category_id:number, brand_id:number, product_desc:string) {
    return this.http.put(this.PHP_API_SERVER + 'product_update.php', { product_id, product_name, product_img, product_price, category_id, brand_id, product_desc },  {responseType: 'text'});
  }

  // Bill
  getBillList(){
    return this.http.get<any>(`${this.PHP_API_SERVER}/read_bill.php`)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  getBillDetailList(){
    return this.http.get<any>(`${this.PHP_API_SERVER}/read_billdetail.php`)
    .pipe(map((res:any) => {
      return res;
    }))
  }
}
