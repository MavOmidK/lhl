import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { playerFeatureSearchRoutes } from './lib.routes';
import { PlayerFeatureSearchComponent } from './player-feature-search/player-feature-search.component';
import { PlayerSearchComponent } from '@lhl/player/ui';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(playerFeatureSearchRoutes),
    PlayerSearchComponent
  ],
  declarations: [PlayerFeatureSearchComponent]
})
export class PlayerFeatureSearchModule {}
