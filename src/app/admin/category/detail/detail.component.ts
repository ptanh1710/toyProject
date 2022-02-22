import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute} from '@angular/router';
import { category } from 'src/app/Model/category.class';

import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  public categoryList: category[] =[];
  public id: any;
  public detail: category[] =[];
  categoryForm !: FormGroup;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router,) {
    this.categoryForm = this.fb.group({
      category_name: ['',Validators.required],
      category_note: ['']
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.api.getCategoryList().subscribe((res: category[])=> {
        this.categoryList = res;

        this.detail = this.categoryList.filter(item => {

          return item.category_id === this.id;
        })
        this.categoryForm = this.fb.group({
          category_name: [this.detail[0].category_name,Validators.required],
          category_note: [this.detail[0].category_note,]
        });
      })
    })
  }

  updateCate(form:any) {
    if(this.categoryForm.value.category_name.length > 0){
      this.api.updateCategory(this.id,this.categoryForm.value.category_name,this.categoryForm.value.category_note)
      .subscribe(
        data => {
          // console.log(data);
          this.router.navigate(['/admin/category-list']);
        },
        error => {
          console.log(error);
        }
      )
    }
    else {
      alert('Bạn chưa nhập tên loại sản phẩm')
    }
    // console.log(this.categoryForm.value);

  }
}
