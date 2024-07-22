import {Route, RouterModule} from '@angular/router';
import {FeatureDashboardComponent} from './feature-dashboard/feature-dashboard.component';
import {featureHeaderRoutes} from '@lhl/client/feature-header';

export const featureDashboardRoutes: Route[] = [
  {
    path: '',
    component: FeatureDashboardComponent,
  }
];
