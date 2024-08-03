import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user.modele";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements  OnInit {

  user = new User();
  erreur = 0
  constructor(private authService: AuthService,private router: Router  ) {
  }

  ngOnInit(): void {
  }
  onLoggedIn() {
    console.log(this.user)

    let isValidUser : boolean = this.authService.signIn(this.user)
    if (isValidUser){
      this.router.navigate(['/'])
    }
    else
      //alert('login ou mot de pass incorrect')
      this.erreur=1
  }
}
