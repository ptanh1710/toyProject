import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './router/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CateIdComponent } from './func/cate-id/cate-id.component';
import { BrandIdComponent } from './func/brand-id/brand-id.component';
import { BrandComponent } from './components/brand/brand.component';
import { FormatcontentPipe } from './pipe/formatcontent.pipe';
import { FormatnumberPipe } from './pipe/formatnumber.pipe';
import { DetailComponent } from './components/detail/detail.component';
import { CheckoutComponent } from './func/checkout/checkout.component';
import { LoginComponent } from './func/login/login.component';
import { RegisterComponent } from './func/register/register.component';
import { OrdersComponent } from './func/orders/orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { HeaderAdminComponent } from './admin/cpnAdmin/header-admin/header-admin.component';
import { FooterAdminComponent } from './admin/cpnAdmin/footer-admin/footer-admin.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryListComponent } from './admin/category/list/list.component';
import { CategoryAddComponent } from './admin/category/add/add.component';
import { CategoryDetailComponent } from './admin/category/detail/detail.component';
import { BrandListComponent } from './admin/brand/brand-list/brand-list.component';
import { BrandAddComponent } from './admin/brand/brand-add/brand-add.component';
import { BrandDetailComponent } from './admin/brand/brand-detail/brand-detail.component';
import { ProductListComponent } from './admin/product/product-list/product-list.component';
import { ProductDetailComponent } from './admin/product/product-detail/product-detail.component';
import { ProductAddComponent } from './admin/product/product-add/product-add.component';
import { BillListComponent } from './admin/bill/bill-list/bill-list.component';
import { BillDetailComponent } from './admin/bill/bill-detail/bill-detail.component';
import { IntroduceComponent } from './components/introduce/introduce.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    ProductsComponent,
    CartComponent,
    FooterComponent,
    HomeComponent,
    CateIdComponent,
    BrandIdComponent,
    BrandComponent,
    FormatcontentPipe,
    FormatnumberPipe,
    DetailComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent,
    OrdersComponent,
    DashboardComponent,
    AdminLoginComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    ProductComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryDetailComponent,
    BrandListComponent,
    BrandAddComponent,
    BrandDetailComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductAddComponent,
    BillListComponent,
    BillDetailComponent,
    IntroduceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
