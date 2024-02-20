import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../authentication/services/storage/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isCustomerLoggedIn : boolean = StorageService.isCustomerLoggedIn();
  isAdminLoggedIn : boolean = StorageService.isAdminLoggedIn();

  constructor(
    private router : Router
  ){}

  ngOnInit(){
    this.router.events.subscribe((val) => {
      if(val.constructor.name === "NavigationEnd"){
        this.isCustomerLoggedIn = StorageService.isCustomerLoggedIn();
        this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
      }
    })
  }

  logOut(){
    StorageService.logOut();
    this.router.navigateByUrl('/login');
  }

}
