import { ENVIRONMENT_INITIALIZER } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes, provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { firebaseConfig } from '../../../../../firebase.config';

export interface CoreOptions {
  routes: Routes;
}

export function provideCore({ routes }: CoreOptions) {
  return [
    provideAnimationsAsync(),
    provideClientHydration(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    // other 3rd party libraries providers like NgRx, provideStorr
    // other application specific providers and setup
    // perform initialization, has to be last
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue() {
        // add init logic here...
        // kickstart processes, trigger initial requests or actions, ...
      },
    },
  ];
}
