import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private api: ApiService,private router:Router) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.min(99999)]]
    });
  }

  ngOnInit(): void {

  }

  postData(loginForm: any) {

    this.api.userlogin(loginForm.value.email, loginForm.value.password)
    .pipe(first())
    .subscribe(
      data => {
        // const redirect = this.api.redirectUrl ? this.api.redirectUrl : '/home';
        if(JSON.stringify(data).length > 2) {
          this.router.navigate(['']);
        }
      },
      error => {
        alert("Tài khoản và mật khẩu không đúng")
        // console.log(loginForm);
        console.log(error);
      }
    );


  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

}
