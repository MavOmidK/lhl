import {ChangeDetectionStrategy, Component} from '@angular/core';
import { TeamService } from '@lhl/client/data-access';

@Component({
  selector: 'lhl-feature-dashboard',
  templateUrl: './feature-dashboard.component.html',
  styleUrls: ['./feature-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureDashboardComponent {
  teams$ = this.teamService.getAllTeams();

  constructor(private teamService: TeamService) {}

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
