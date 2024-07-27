import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NhlService } from '@lhl/shared-services-nhl';

@Component({
  selector: 'lhl-feature-search',
  templateUrl: './feature-search.component.html',
  styleUrls: ['./feature-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NhlService]
})
export class FeatureSearchComponent {
  name = '';

  playerSearch$ = this.nhlService.searchPlayer(this.name);

  constructor(private nhlService: NhlService) {}

  onKeyDownPlayerSearch(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.playerSearch$ = this.nhlService.searchPlayer(this.name);
    }
  }
}
