import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    const token = this.auth.getToken();
    if (!token) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
