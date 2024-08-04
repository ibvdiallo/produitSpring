import { Injectable } from '@angular/core';
import {User} from "../model/user.modele";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = [{"username": 'admin',"password":"123","roles":['ADMIN']},
    {"username": 'ibrahima',"password":"12345","roles":['USER']}]
  public loggedUser!: string
  public loggedIn: boolean = false
  public  roles!:string[]

  constructor(private router : Router) { }

  signIn(user : User):boolean{
    let validUser : boolean = false
    this.users.forEach((curUser)=>{
      if(user.username == curUser.username && user.password == curUser.password){
        validUser = true
        this.loggedIn = true
        this.loggedUser = curUser.username
        this.roles = curUser.roles
        localStorage.setItem('loggedUser',this.loggedUser)
        localStorage.setItem('loggedIn',String(this.loggedIn))
      }
    })
    return validUser
  }
  logout() {
    this.loggedIn = false
    this.loggedUser = undefined!
    this.roles = undefined!
    localStorage.removeItem('loggedUser')
    localStorage.setItem('loggedIn',String(this.loggedIn))
    this.router.navigate(["/login"])
  }
  isAdmin() : boolean {
    if (!this.roles){
      return false
    }
    return (this.roles.indexOf('ADMIN') > -1)
  }

  setLoggedUserFromLocalStorage(login: string) {
      this.loggedUser = login
    this.loggedIn = true
    this.getUserRoles(login)
  }
  getUserRoles(username : string) {
    this.users.forEach((curser)=>{
      if (curser.username == username){
        this.roles = curser.roles
      }
    })
  }
}
