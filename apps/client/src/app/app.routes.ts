import { Route } from '@angular/router';


export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: async() => (await import('@lhl/client/feature-dashboard')).FeatureDashboardModule
  },
];
