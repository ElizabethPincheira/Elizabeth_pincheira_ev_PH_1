import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'circulo',
    loadComponent: () => import('./circulo/circulo.component').then( m => m.CirculoPage)
  },
  {
    path: 'triangulo',
    loadComponent: () => import('./triangulo/triangulo.page').then( m => m.TrianguloPage)
  },
];
