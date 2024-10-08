import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { UserComponent } from './core/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, LoginComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'starter-latest';
}
