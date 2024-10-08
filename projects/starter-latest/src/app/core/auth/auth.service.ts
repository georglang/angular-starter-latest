import { Injectable, inject } from '@angular/core';
import {
  Auth,
  authState,
  user,
  User,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  UserCredential,
} from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private user$ = user(this.auth);
  private authState$ = authState(this.auth);

  userState(): Observable<User | null> {
    return this.user$;
  }

  authState(): Observable<User | null> {
    return this.authState$;
  }

  async loginWithGoogle(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }

  async loginWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(): Promise<void> {
    return this.auth.signOut();
  }
}
