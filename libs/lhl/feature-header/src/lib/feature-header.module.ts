import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureHeaderRoutes } from './lib.routes';
import { FeatureHeaderComponent } from './feature-header/feature-header.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(featureHeaderRoutes), NgOptimizedImage],
  declarations: [FeatureHeaderComponent],
  exports: [
    FeatureHeaderComponent
  ]
})
export class FeatureHeaderModule {}
