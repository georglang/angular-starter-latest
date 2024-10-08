import { Component, inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private readonly redirect = ['/'];

  loginWithGoogle() {
    this.authService.loginWithGoogle().then(() => {
      this.router.navigate(this.redirect);
    });
  }

  loginWithEmailAndPassword(email: string, password: string): void {
    this.authService.loginWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(this.redirect);
    });
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(this.redirect);
    });
  }
}
