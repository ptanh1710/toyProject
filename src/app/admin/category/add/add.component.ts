import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class CategoryAddComponent implements OnInit {

  categoryForm !: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private api: ApiService) {
    this.categoryForm = this.fb.group({
      category_name: ['',Validators.required],
      category_note: ['']
    });
   }

  ngOnInit(): void {
  }

  insertCategory(categoryForm: any){
    // console.log(categoryForm.value.category_name);

    if(this.categoryForm.value.category_name.length > 0){
      this.api.insertCategory(categoryForm.value.category_name, categoryForm.value.category_note)
      .pipe(first())
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
  }

}
