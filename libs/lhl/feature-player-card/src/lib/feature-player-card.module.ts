import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerCardComponent } from './ui/desktop/player-card.component';
import { PlayerCardContainer } from './container/player-card/player-card.container';

@NgModule({
  imports: [CommonModule],
  declarations: [PlayerCardComponent, PlayerCardContainer],
  exports: [PlayerCardContainer],
})
export class FeaturePlayerCardModule {}
