import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public totalPrice !: number;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getProducts().subscribe(res => {
      this.products = res;
      this.totalPrice = this.cart.getTotalPrice();
      // console.log(this.products);

    })
  }

  increase(item:any){
    this.cart.increase(item);
    this.totalPrice= this.cart.getTotalPrice();
  }

  decrease(item:any) {
    this.cart.decrease(item);
    this.totalPrice= this.cart.getTotalPrice();
  }

  removeCartItem(item: any) {
    this.cart.removeCartItem(item);
    this.totalPrice = this.cart.getTotalPrice();
  }

  removeAllCartItems() {
    this.cart.removeAllCartItems();
  }
}
