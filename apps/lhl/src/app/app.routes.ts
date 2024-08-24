import { Route } from '@angular/router';


export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: async() => (await import('@lhl/feature-dashboard')).FeatureDashboardModule
  },
  {
    path: 'managers',
    loadChildren: async() => (await import('@lhl/manager/feature-page')).ManagerFeaturePageModule
  },
  {
    path: 'teams',
    loadChildren: async() => (await import('@lhl/team/feature-page')).TeamFeaturePageModule
  }
];
