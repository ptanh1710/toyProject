import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList :any;
  constructor(private api: ApiService, private cart:CartService) { }

  ngOnInit(): void {
    this.getProductList();
  }
  getProductList() {
    this.api.getProductList().subscribe(res => {
      this.productList = res;

      this.productList.forEach((product:any) => {
        Object.assign(product, {quantity: 1, total: product.product_price})
      })
    })
  }

  addToCart(item:any){
    this.cart.addToCart(item);
  }

}
