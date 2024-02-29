import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostCarComponent } from './components/post-car/post-car.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';
import { GetBookingsComponent } from './components/get-bookings/get-bookings.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent },
  {path: 'add-car', component: PostCarComponent},
  {path: 'car/:id', component: UpdateCarComponent},
  {path: 'bookings', component: GetBookingsComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
