import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureSearchRoutes } from './lib.routes';
import { FeatureSearchComponent } from './feature-search/feature-search.component';
import { ClrInputModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { FeaturePlayerCardModule } from '@lhl/feature-player-card';

@NgModule({
  imports: [CommonModule, ClrInputModule, RouterModule.forChild(featureSearchRoutes), FormsModule, FeaturePlayerCardModule],
  declarations: [FeatureSearchComponent],
  exports: [FeatureSearchComponent],
})
export class FeatureSearchModule {}
