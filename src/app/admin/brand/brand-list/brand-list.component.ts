import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brandList: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getBrandList().subscribe(item => {
      return this.brandList = item;
    })
  }

}
