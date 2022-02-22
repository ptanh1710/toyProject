import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public products: any = [];
  public totalPrice !: number;

  billname : any;
  billaddress : any;

  listitem = this.cart.getProducts().subscribe(res => {
    this.products = res;
  })
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getProducts().subscribe(res => {
      this.products = res;
      this.totalPrice = this.cart.getTotalPrice();
      // console.log(this.products);
    })
  }

  checkout() {
    var bill: Object = {
      customer_id: 1,
      bill_name: this.billname,
      bill_address: this.billaddress,
      bill_total : this.cart.getTotalPrice(),
    }
    console.log(bill);
    // ????
    this.products.map((item:any) => {
      var billdetail: Object = {
        product_id: item.product_id,
        billdetail_quantity: item.quantity,
        billdetail_total: item.total*item.quantity,
      }
      console.log(billdetail);
    })

  }

}
