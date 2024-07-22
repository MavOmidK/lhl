import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamService} from '@lhl/client/data-access';
import {FeatureDashboardComponent} from './feature-dashboard/feature-dashboard.component';
import {featureDashboardRoutes} from './lib.routes';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    FeatureDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(featureDashboardRoutes)
  ],
  providers: [
    TeamService
  ],
  exports: [FeatureDashboardComponent]
})
export class FeatureDashboardModule {}
