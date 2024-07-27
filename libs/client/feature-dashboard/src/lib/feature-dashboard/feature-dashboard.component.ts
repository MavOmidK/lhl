import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'lhl-feature-dashboard',
  templateUrl: './feature-dashboard.component.html',
  styleUrls: ['./feature-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureDashboardComponent {
  constructor() {}

  // TODO: Put this into a smart container
  get teamName(): string {
    return '';
  }

  get numOfPlayers(): string {
    return '';
  }

  get teamManager() {
    return '';
  }
}
