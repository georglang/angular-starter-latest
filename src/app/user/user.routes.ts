import { Routes } from '@angular/router';

export default <Routes>[
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        loadComponent: () => import('./user.component').then((m) => m.UserComponent),
      },
    ],
  },
];
