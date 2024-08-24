import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Player } from '@lhl/shared/domain';
import { PlayerCardPresenter } from '../../presenter/player-card.presenter';

@Component({
  selector: 'lhl-player-card-ui-desktop',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PlayerCardPresenter]
})
export class PlayerCardComponent {
  @Input() set player(value: Player | undefined) {
    if(value) {
      this.presenter.player = value;
    }
  }

  constructor(private presenter: PlayerCardPresenter) {}

  get loading(): boolean {
    return this.presenter.loading;
  }

  get imgAlt(): string {
    return this.presenter.imgAlt;
  }

  get name(): string {
    return this.presenter.name;
  }

  get position(): string {
    return this.presenter.position;
  }

  get teamAbbrev(): string {
    return this.presenter.teamAbbrev;
  }
}
