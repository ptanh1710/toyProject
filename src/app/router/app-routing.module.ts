import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandComponent } from '../components/brand/brand.component';
import { CartComponent } from '../components/cart/cart.component';
import { DetailComponent } from '../components/detail/detail.component';
import { ProductsComponent } from '../components/products/products.component';
import { BrandIdComponent } from '../func/brand-id/brand-id.component';
import { CateIdComponent } from '../func/cate-id/cate-id.component';
import { CheckoutComponent } from '../func/checkout/checkout.component';
import { LoginComponent } from '../func/login/login.component';
import { OrdersComponent } from '../func/orders/orders.component';
import { RegisterComponent } from '../func/register/register.component';
import { HomeComponent } from '../home/home.component';

import { AdminLoginComponent } from '../admin/admin-login/admin-login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CategoryListComponent } from 'src/app/admin/category/list/list.component';
import { CategoryAddComponent } from 'src/app/admin/category/add/add.component';
import { CategoryDetailComponent } from 'src/app/admin/category/detail/detail.component';

import { AuthGuardGuard } from '../guard/auth-guard.guard';
import { ProductComponent } from '../components/product/product.component';
import { BrandListComponent } from '../admin/brand/brand-list/brand-list.component';
import { BrandAddComponent } from '../admin/brand/brand-add/brand-add.component';
import { BrandDetailComponent } from '../admin/brand/brand-detail/brand-detail.component';
import { ProductListComponent } from '../admin/product/product-list/product-list.component';
import { ProductAddComponent } from '../admin/product/product-add/product-add.component';
import { ProductDetailComponent } from '../admin/product/product-detail/product-detail.component';
import { BillListComponent } from '../admin/bill/bill-list/bill-list.component';
import { BillDetailComponent } from '../admin/bill/bill-detail/bill-detail.component';
import { AuthAdminGuard } from '../guard/auth-admin.guard';
import { IntroduceComponent } from '../components/introduce/introduce.component';

const routes: Routes = [
  // Front End
  {path: '', component:HomeComponent},

  // {path: 'home', component:HomeComponent,canActivate: [AuthGuardGuard]},
  {path: 'home', component:HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'cart', component:CartComponent},
  {path: 'product', component:ProductComponent},
  {path: 'category/:id', component: CateIdComponent},
  {path: 'brand', component: BrandComponent},
  {path: 'brand/:id', component: BrandIdComponent},
  {path: 'introduce', component: IntroduceComponent},
  {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuardGuard]},
  {path: 'order', component: OrdersComponent, canActivate: [AuthGuardGuard]},

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  // Back End
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthAdminGuard]},
  {path: 'admin', component: DashboardComponent, canActivate: [AuthAdminGuard]},
  {
    path: 'admin',
    canActivate: [AuthAdminGuard],
    children: [
      {path: 'category-list', component: CategoryListComponent},
      {path: 'category-add', component: CategoryAddComponent},
      {path: 'category-detail/:id', component: CategoryDetailComponent},

      {path: 'brand-list', component: BrandListComponent},
      {path: 'brand-add', component: BrandAddComponent},
      {path: 'brand-detail/:id', component: BrandDetailComponent},

      {path: 'product-list', component: ProductListComponent},
      {path: 'product-add', component: ProductAddComponent},
      {path: 'product-detail/:id', component: ProductDetailComponent},

      {path: 'bill-list', component: BillListComponent},
      {path: 'bill-detail/:id', component: BillDetailComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


