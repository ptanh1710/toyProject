import { Component, OnInit  } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    '../../app.component.css'
  ],

})
export class HeaderComponent implements OnInit {

  public categoryList: any;
  public totalItemCart:number =0;

  customerName?: string;

  loginbtn:boolean = false;
  logoutbtn:boolean = false;

  constructor(private api: ApiService, private cart:CartService) {
    api.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.api.isLoggedIn())
    {
      const nameUser = this.api.getToken();
      this.customerName = nameUser[0].customer_name;
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
    this.api.getCategoryList().subscribe(res => {
      return this.categoryList = res;
    })
    this.cart.getProducts().subscribe(res => {

      return this.totalItemCart = res.length;
    })

  }
  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
  logout()
  {
    this.api.deleteToken();
    window.location.href = '/login';
  }

}
