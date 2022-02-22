import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginForm !: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private adminService: AdminService) {
    this.adminLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
   }

  ngOnInit(): void {
  }

  loginAdmin(adminLoginForm: any) {
    if (this.adminLoginForm.value.email.length > 0 && this.adminLoginForm.value.password.length > 0) {
      // console.log(this.adminLoginForm.value);
      this.adminService.adminlogin(adminLoginForm.value.email, adminLoginForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          if (JSON.stringify(data).length > 2) {
            this.router.navigate(['/dashboard']);
          }

        },
        error => {
          alert("Tài khoản và mật khẩu không đúng")
          console.log(error);
        }
      );

    }
    else {
      alert('Bạn chưa nhập dự liệu')
    }

  }

  get email() {
    return this.adminLoginForm.get('email');
  }
  get password() {
    return this.adminLoginForm.get('password');
  }
}
