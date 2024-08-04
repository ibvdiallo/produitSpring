import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {resolveSrv} from "node:dns";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements  OnInit {
  title = 'produitSpring';
  constructor(public authService: AuthService,public router : Router) {
  }

  onLogout() {
      this.authService.logout();
  }

  ngOnInit(): void {
    let isloggedIn : any
    let loggedUser : any
    isloggedIn = localStorage.getItem('isloggedIn')
    loggedUser = localStorage.getItem('loggedUser')
    if(isloggedIn!="true" || !loggedUser) {
      this.router.navigate(['/login'])
    }
    else
      this.authService.setLoggedUserFromLocalStorage(loggedUser)
  }
}
