import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureSearchRoutes } from './lib.routes';
import { FeatureSearchComponent } from './feature-search/feature-search.component';
import { ClrInputModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ClrInputModule, RouterModule.forChild(featureSearchRoutes), FormsModule], // Add ClrInputModule to the imports array
  declarations: [FeatureSearchComponent],
  exports: [FeatureSearchComponent],
})
export class FeatureSearchModule {}
