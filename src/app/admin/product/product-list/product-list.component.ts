import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProductList().subscribe(item =>{
      return this.productList = item;
    });
  }

}
