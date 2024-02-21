import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostCarComponent } from './components/post-car/post-car.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent },
  {path: 'add-car', component: PostCarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
