import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemlist: any[] = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemlist.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    const checkItem = this.cartItemlist.every(item => {
      // console.log(item.product_id);

      return item.product_id !== product.product_id;
      }
    )
    if (checkItem) {
      this.cartItemlist.push(product);
      this.productList.next(this.cartItemlist);
      this.getTotalPrice();
    }
    else {
      this.increase(product);
    }


  }

  getTotalPrice():number {
    let total = 0;
    this.cartItemlist.map((item:any) => {
      total += (item.total*item.quantity);
    })
    return total;
  }

  increase(product:any) {
    this.cartItemlist.forEach(item => {
      if(item.product_id === product.product_id) {
        item.quantity === 5 ? item.quantity === 5 : item.quantity ++ ;
      }
    })
    this.getTotalPrice();
  }

  decrease(product:any) {
    this.cartItemlist.forEach(item => {
      if(item.product_id === product.product_id) {
         item.quantity === 1 ? item.quantity === 1 : item.quantity--;
      }
    })
    this.getTotalPrice();
  }

  removeCartItem(product:any) {
    this.cartItemlist.map((item:any, index:any) => {
      if (product.product_id === item.product_id){
        this.cartItemlist.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemlist);
    // this.getTotalPrice();
  }

  removeAllCartItems() {
    this.cartItemlist = [];
    this.productList.next(this.cartItemlist);

  }
}
