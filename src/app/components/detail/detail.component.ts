import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product.class';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute} from '@angular/router';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public productList: Product[] =[];
  public id: any;
  public detail: Product[] =[];
  qty :number =1;


  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private cart: CartService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.api.getProductList().subscribe((res: Product[])=> {
        this.productList = res;

        this.detail = this.productList.filter(item => {
          return item.product_id === this.id;
        })

      })
    })
  }

  increaseQty() {
    this.qty === 5 ? this.qty === 5 : this.qty++;
  }

  decreaseQty() {
    this.qty === 1 ? this.qty === 1 : this.qty--;
  }


  addToCart(product:any) {
    this.detail.forEach((product:any) => {
      Object.assign(product, {quantity: this.qty, total: product.product_price * this.qty});
    })
    this.cart.addToCart(product);

  }

}
