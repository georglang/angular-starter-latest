import { Routes } from '@angular/router';

export default [
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./user.component').then((m) => m.UserComponent),
      },
    ],
  },
] as Routes;
