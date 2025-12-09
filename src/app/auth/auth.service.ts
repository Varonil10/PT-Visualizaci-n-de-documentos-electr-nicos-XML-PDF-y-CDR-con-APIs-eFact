import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly validUser = '20111193035';
  private readonly validPassword = '123456';

  // Login local sin backend
  login(username: string, password: string): Promise<boolean> {
    return new Promise(resolve => {
      if (username === this.validUser && password === this.validPassword) {
        const fakeToken = 'fake-local-token';
        localStorage.setItem('efact_token', fakeToken);
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }

  logout() {
    localStorage.removeItem('efact_token');
  }

  getToken(): string | null {
    return localStorage.getItem('efact_token');
  }
}
