import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class CategoryListComponent implements OnInit {

  categoryList: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getCategoryList().subscribe(item => {
      return this.categoryList = item;
    })
  }

}
