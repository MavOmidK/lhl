import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Player } from '@lhl/shared/domain';
import { PlayerCardComponent } from '../player-card/player-card.component';

@Component({
  selector: 'lhl-player-search-ui',
  standalone: true,
  imports: [CommonModule, FormsModule, PlayerCardComponent],
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerSearchComponent {

  @Input() players: Array<Player> = [];
  @Output() searchTerm: EventEmitter<string> = new EventEmitter<string>();

  searchName = '';

  constructor() {}

  onKeyDownPlayerSearch(event: KeyboardEvent) {
    if (event.key !== 'Enter') {
      return;
    }

    this.searchTerm.emit(this.searchName);
  }
}
