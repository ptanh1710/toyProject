import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm !: FormGroup;

  categoryList :any;
  brandList : any;

  constructor(private fb: FormBuilder, private router: Router, private api: ApiService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      img: ['', Validators.required],
      price: ['', Validators.required],
      cate_id: ['', Validators.required],
      brand_id: ['', Validators.required],
      desc: [''],
    });
   }

  ngOnInit(): void {
    this.api.getCategoryList().subscribe(item => {
      return this.categoryList = item;
    })

    this.api.getBrandList().subscribe(item => {
      return this.brandList = item;
    })
  }

  onSelectFile(e:any) {
    console.log(e.target.files[0].name);
  }

  insertProduct(productForm:any) {
    var imgslit = productForm.value.img.split("C:\\fakepath\\")
      console.log(imgslit[1]);
      productForm.value.img = imgslit[1];
      // console.log(this.productForm.value);

      this.api.insertProduct(productForm.value.name, productForm.value.img, productForm.value.price, productForm.value.cate_id, productForm.value.brand_id ,productForm.value.desc)
      .pipe(first())
      .subscribe(
        data => {
          // console.log(data);
          this.router.navigate(['/admin/product-list']);
        },
        error => {
          console.log(error);
        }
      )
    // if(this.productForm.value.product_name.length > 0){

    // }
    // else {
    //   alert ('Chưa nhập đủ thông tin');
    // }

  }

}
