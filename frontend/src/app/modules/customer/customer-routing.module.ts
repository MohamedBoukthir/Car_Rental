import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { CustomerBookingComponent } from './components/customer-booking/customer-booking.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: 'dashboard', component: CustomerDashboardComponent},
  {path: 'book/:id', component: BookingComponent},
  {path: 'booking', component: CustomerBookingComponent},
  {path: 'car/search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
