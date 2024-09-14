import { Routes } from '@angular/router';

export default [
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./home.component').then((m) => m.HomeComponent),
      },
    ],
  },
] as Routes;
