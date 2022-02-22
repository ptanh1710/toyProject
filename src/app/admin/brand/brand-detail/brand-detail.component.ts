import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute} from '@angular/router';
import { brand } from 'src/app/Model/brand.class';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.css']
})
export class BrandDetailComponent implements OnInit {

  public brandList: brand[] =[];
  public id: any;
  public detail: brand[] =[];
  brandForm !: FormGroup;
  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router,) {
    this.brandForm = this.fb.group({
      brand_name: ['',Validators.required],
      brand_desc: ['']
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);

      this.api.getBrandList().subscribe((res: brand[])=> {
        this.brandList = res;

        this.detail = this.brandList.filter(item => {
          return item.brand_id === this.id;
        })
        this.brandForm = this.fb.group({
          brand_name: [this.detail[0].brand_name,Validators.required],
          brand_desc: [this.detail[0].brand_desc,]
        });
      })
    })
  }

  updateBrand(brandForm:any) {
    if(this.brandForm.value.brand_name.length > 0){
      this.api.updateBrand(this.id, this.brandForm.value.brand_name, this.brandForm.value.brand_desc)
      .subscribe(
        data => {
          // console.log(data);
          this.router.navigate(['/admin/brand-list']);
        },
        error => {
          console.log(error);
        }
      )
    }
    else {
      alert('Bạn chưa nhập tên thương hiệu')
    }
  }

}
