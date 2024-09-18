import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Team } from '@lhl/team/data-access';
import { TeamTableHeaders } from './model/team-table-headers';
import { ManagerNamePipe } from '@lhl/shared/utils/pipe';
import { ClarityModule } from '@clr/angular';
import { Icons } from '@lhl/shared/domain';

@Component({
  selector: 'lhl-team-list',
  standalone: true,
  imports: [CommonModule, ClarityModule, ManagerNamePipe],
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent {
  readonly editIcon = Icons.Edit;

  private _teams: Array<Team> = [];
  
  @Input() set teams(teams: Array<Team> | undefined | null) {
    if(teams) {
      this._teams = teams;
    }
  }

  get teams(): Array<Team> {
    return this._teams;
  }

  get headers(): Array<string> {
    return Object.values(TeamTableHeaders);
  }

  players(team: Team): number {
    if(team.activeRoster) {
      return team.activeRoster.length;
    } else {
      return 0;
    }
  }

  prospects(team: Team): number {
    if(team.prospectRoster) {
      return team.prospectRoster.length;
    } else {
      return 0;
    }
  }

  onClickTeam(team: Team) {
    console.log(team);
  }

  onClickEditTeam(team: Team) {
    console.log(team);
  }
}
