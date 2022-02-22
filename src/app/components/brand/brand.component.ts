import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  public brandList: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getBrandList().subscribe(res => {
      return this.brandList = res;
    })
  }

}
