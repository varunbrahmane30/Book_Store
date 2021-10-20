import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GetallbooksComponent } from './components/getallbooks/getallbooks.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashbordComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  {
    path: 'home',
    component: DashbordComponent,
    children: [{ path: 'books', component: GetallbooksComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
