import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { first } from 'rxjs/operators';
import { Product } from 'src/app/Model/product.class';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public productList: Product[] =[];
  public id: any;
  public detail: Product[] =[];
  categoryList: any;
  brandList: any;
  productForm !: FormGroup;
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private api: ApiService) {
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
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.api.getProductList().subscribe((res: Product[])=> {
        this.productList = res;

        this.detail = this.productList.filter(item => {
          return item.product_id === this.id;
        })
        this.productForm = this.fb.group({
          name: [this.detail[0].product_name, Validators.required],
          img: [this.detail[0].product_img, Validators.required],
          price: [this.detail[0].product_price, Validators.required],
          cate_id: [this.detail[0].category_id, Validators.required],
          brand_id: [this.detail[0].brand_id, Validators.required],
          desc: [this.detail[0].product_desc],
        });
      })
    })

    this.api.getCategoryList().subscribe(item => {
      return this.categoryList = item;
    })

    this.api.getBrandList().subscribe(item => {
      return this.brandList = item;
    })


  }

  updateProduct(productForm:any) {
    if(this.productForm.value.name.length > 0){
      this.api.updateProduct(this.id, productForm.value.name, productForm.value.img, productForm.value.price, productForm.value.cate_id, productForm.value.brand_id,productForm.value.desc)
      .subscribe(
        data => {
          // console.log(data);
          this.router.navigate(['/admin/product-list']);
        },
        error => {
          console.log(error);
        }
      )
    }
    else {
      alert('Bạn chưa nhập đủ thông tin')
    }
  }

}
