import { Route } from '@angular/router';


export const appRoutes: Route[] = [
  {
    path: 'managers',
    loadChildren: async() => (await import('@lhl/manager/feature-page')).ManagerFeaturePageModule
  },
  {
    path: 'teams',
    loadChildren: async() => (await import('@lhl/team/feature-page')).TeamFeaturePageModule
  },
  {
    path: '',
    redirectTo: 'teams',
    pathMatch: 'full'
  },
];
