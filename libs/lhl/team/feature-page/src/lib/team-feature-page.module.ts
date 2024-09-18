import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamFeaturePageComponent } from './team-feature-page/team-feature-page.component';
import { featureTeamRoutes } from './lib.routes';
import { RouterModule } from '@angular/router';
import { TeamFeatureViewComponent } from '@lhl/team/feature-view';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featureTeamRoutes),
    TeamFeatureViewComponent,
  ],
  declarations: [TeamFeaturePageComponent],
})
export class TeamFeaturePageModule {}