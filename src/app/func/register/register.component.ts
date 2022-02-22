import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private api: ApiService, private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required,Validators.minLength(1), Validators.email])],
      password: ['', Validators.compose([Validators.required,Validators.minLength(8)])],
      r_password: ['',Validators.compose([Validators.required,Validators.minLength(8)])],
    })
  }

  ngOnInit(): void {
  }

  postData(registerForm: any) {
    // console.log(this.registerForm.value);
    this.api.userRegistration(registerForm.value.email, registerForm.value.name, registerForm.value.password)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['/login']);
      },
      error => {
        console.log('Failed Register');
      }
    )
  }

  get email() {
    return this.registerForm.get('email');
  }

  get name() {
    return this.registerForm.get('name');
  }

  get password() {
    return this.registerForm.get('password');
  }

}
