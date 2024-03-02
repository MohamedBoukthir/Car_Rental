import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './authentication/components/register/register.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent},
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
  {path: 'customer', loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
