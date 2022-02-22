import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandForm !: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private api: ApiService)
  {
    this.brandForm = this.fb.group({
      brand_name: ['',Validators.required],
      brand_desc: ['']
    });
  }

  ngOnInit(): void {
  }

  insertBrand(brandForm: any){
    if(this.brandForm.value.brand_name.length > 0){
      this.api.insertBrand(brandForm.value.brand_name, brandForm.value.brand_desc)
      .pipe(first())
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
      alert('Bạn chưa nhập tên hãng sản phẩm')
    }
  }

}
