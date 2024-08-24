import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerFeaturePageComponent } from './manager-feature-page/manager-feature-page.component';
import { ManagerFeatureCreateComponent } from '@lhl/manager/feature-create';
import { ManagerFeatureViewComponent } from '@lhl/manager/feature-view';
import { featureManagerRoutes } from './lib.routes';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ManagerFeaturePageComponent],
  imports: [ 
    CommonModule,
    RouterModule.forChild(featureManagerRoutes),
    ManagerFeatureCreateComponent, 
    ManagerFeatureViewComponent],
  exports: [ManagerFeaturePageComponent]
})
export class ManagerFeaturePageModule {}
