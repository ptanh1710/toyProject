import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Model/product.class';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-brand-id',
  templateUrl: './brand-id.component.html',
  styleUrls: ['./brand-id.component.css']
})
export class BrandIdComponent implements OnInit {

  public productList: Product[] =[];
  public productBrand: Product[] =[];
  brandId: any ;

  brand: any[] = [];

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private cart:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.brandId = params['id'];

      this.api.getProductList().subscribe((res: Product[]) => {
        this.productList = res;

        this.productList.forEach((product:any) => {
          Object.assign(product, {quantity: 1, total: product.product_price})
        })

        this.productBrand = this.productList.filter(item => {
          return item.brand_id === this.brandId;
        })
      })

      this.api.getBrandList().subscribe((res:any) => {
        this.brand = res;

        this.brand = this.brand.filter((brand:any) => {
          return brand.brand_id === this.brandId;
        })
        // console.log(this.brand);

      })
    })
  }

  addToCart(item:any){
    this.cart.addToCart(item);
  }
}
