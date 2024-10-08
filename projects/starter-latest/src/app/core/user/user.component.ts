import { Component, inject, OnDestroy } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: true,
})
export class UserComponent implements OnDestroy {
  private authService = inject(AuthService);

  userState$: Subscription;
  authState$: Subscription;

  constructor() {
    this.userState$ = this.authService.userState().subscribe((user: User | null) => {
      // handle user state changes here:
      // triggered for sign -in, sign - out, and token refresh events
      // Note, that user will be null if there is no currently logged in user.
      console.log('User', user);
    });

    this.authState$ = this.authService.authState().subscribe((user: User | null) => {
      //handle auth state changes here. Note, that user will be null if there is no currently logged in user.
      console.log(user);
    });
  }

  ngOnDestroy() {
    //ToDo change to DestroyRef
    this.userState$.unsubscribe();
    this.authState$.unsubscribe();
  }
}
