import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute} from '@angular/router';
import { Product } from 'src/app/Model/product.class'
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cate-id',
  templateUrl: './cate-id.component.html',
  styleUrls: ['./cate-id.component.css']
})
export class CateIdComponent implements OnInit {

  public productList: Product[] =[];
  cate_id:any;
  public productCate: Product[] =[];

  cate: any [] = [];

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private cart:CartService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.cate_id = params['id'];

      this.api.getProductList().subscribe((res: Product[])=> {
        this.productList = res;
        // console.log(this.productList);

        this.productList.forEach((product:any) => {
          Object.assign(product, {quantity: 1, total: product.product_price})
        })


        this.productCate = this.productList.filter((item) => {
          return item.category_id === this.cate_id;

        })
      })

      this.api.getCategoryList().subscribe((res:any) => {
        this.cate = res;

        this.cate = this.cate.filter((cate:any) => {
          return cate.category_id === this.cate_id;
        })
      })
    })
  }

  addToCart(item:any){
    this.cart.addToCart(item);
  }

}
