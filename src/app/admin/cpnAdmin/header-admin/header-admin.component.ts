import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  adminName?: string;

  loginbtn:boolean = false;
  logoutbtn:boolean = false;

  constructor(private admin: AdminService) {
    admin.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.admin.isLoggedIn())
    {

      const nameAdmin = this.admin.getToken();
      this.adminName = nameAdmin[0].admin_name;
      this.loginbtn=false;
      this.logoutbtn=true;
      // console.log("customerName", this.customerName);
    }
    else{
      this.loginbtn=true;
      this.logoutbtn=false;
    }
  }

  ngOnInit(): void {
  }


  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }

  logout() {
    window.sessionStorage.clear();
    window.location.href = '/admin-login'
  }
}
