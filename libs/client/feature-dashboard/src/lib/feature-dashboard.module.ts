import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureDashboardComponent} from './feature-dashboard/feature-dashboard.component';
import {featureDashboardRoutes} from './lib.routes';
import {RouterModule} from '@angular/router';
import { FeatureSearchModule } from '@lhl/client/feature-search';

@NgModule({
  declarations: [
    FeatureDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(featureDashboardRoutes),
    FeatureSearchModule
  ],
  providers: [],
  exports: [FeatureDashboardComponent]
})
export class FeatureDashboardModule {}
