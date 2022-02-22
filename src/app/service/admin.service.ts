import { Injectable , Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { admin } from 'src/app/Model/admin.class';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  redirectUrl: string ='';

  PHP_API_SERVER = 'http://localhost/api/Toy';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  // Login admin
  adminlogin(admin_account: any, admin_password:any){
    return this.http.post<any>(this.PHP_API_SERVER + '/login-admin.php', { admin_account, admin_password })
    .pipe(map((admin: admin[]) => {
      if(JSON.stringify(admin).length > 2) {
        this.setToken(admin);
      }
      else {
        alert('Đăng nhập thất bại')
      }
      this.getLoggedInName.emit(true);
      return admin;
    }));
  }

  //token
  setToken(token: any) {
    if(token) {
      sessionStorage.setItem('admin',  JSON.stringify(token));
    }
    else {
      sessionStorage.getItem('admin');
    }

  }
  getToken() {
    const json = sessionStorage.getItem('admin');
    if(json){
      return JSON.parse(json);
    }
    return null;
  }
  deleteToken() {
    sessionStorage.removeItem('admin');
  }


  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }

}
