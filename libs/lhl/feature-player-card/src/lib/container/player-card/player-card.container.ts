import { Component, Input } from '@angular/core';
import { Player } from '@lhl/shared/domain';

@Component({
  selector: 'lhl-player-card',
  templateUrl: './player-card.container.html',
})
export class PlayerCardContainer {
  private _player?: Player;

  @Input() set player(player: Player) {
    this._player = player;
  } 
  get player(): Player | undefined {
    return this._player;
  }

  constructor() {}
}
