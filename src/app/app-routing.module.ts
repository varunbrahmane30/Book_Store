import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GetallbooksComponent } from './components/getallbooks/getallbooks.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/AuthGuard/auth.guard';
import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';
import { CartComponent } from './components/cart/cart.component';
import { PlaceprderComponent } from './components/placeprder/placeprder.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { MyordersComponent } from './components/myorders/myorders.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  {
    path: 'home',
    component: DashbordComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'books', component: GetallbooksComponent },
      { path: 'bookdetail', component: BookdetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'placeorder', component: PlaceprderComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'myorders', component: MyordersComponent },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
