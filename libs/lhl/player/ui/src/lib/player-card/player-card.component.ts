import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Player } from '@lhl/shared/domain';

@Component({
  selector: 'lhl-player-card-ui-desktop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerCardComponent {
  @Input() player!: Player;

  constructor() {
    if(!this.player) {
      throw new Error('PlayerCardComponent requires a player');
    }
  }

  get imgAlt(): string {
    return `Headshot of ${this.player.name}`;
  }

  get name(): string {
    return this.player.name;
  }

  get position(): string {
    return this.player.position;
  }

  get teamAbbrev(): string {
    return this.player.nhlTeamAbbrev;
  }
}
