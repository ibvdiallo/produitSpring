import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'produitSpring';
  constructor(public authService: AuthService) {
  }

  onLogout() {
      this.authService.logout();
  }
}
