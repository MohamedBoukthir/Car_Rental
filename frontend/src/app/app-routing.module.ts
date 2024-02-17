import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './authentication/components/register/register.component';
import { LoginComponent } from './authentication/components/login/login.component';

const routes: Routes = [
  {path:'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
