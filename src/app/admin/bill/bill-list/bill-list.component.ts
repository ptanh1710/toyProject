import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  billList: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getBillList().subscribe(item => {
      return this.billList = item;
    })
  }

}
