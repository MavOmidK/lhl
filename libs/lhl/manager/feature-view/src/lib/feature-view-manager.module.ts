import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureViewManagerRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(featureViewManagerRoutes)],
})
export class FeatureViewManagerModule {}
