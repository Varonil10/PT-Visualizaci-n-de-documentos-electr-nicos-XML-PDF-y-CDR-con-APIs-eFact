import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.login(this.username, this.password).then(success => {
      if (success) {
        this.errorMessage = '';
        this.router.navigate(['/documents']);
      } else {
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    });
  }
}
