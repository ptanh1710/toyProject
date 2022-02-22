import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css']
})
export class BillDetailComponent implements OnInit {

  public billdetail: any[] =[];
  public id: any;
  public bill: any[] =[];
  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.api.getBillDetailList().subscribe((res: any[])=> {
        this.billdetail = res;

        this.billdetail = this.billdetail.filter(item => {
          return item.bill_id === this.id;
        })

      })
      this.api.getBillList().subscribe(res => {
        this.bill = res;
        this.bill = this.bill.filter(item => {
          return item.bill_id === this.id;
        })

      })
    })
  }

}
