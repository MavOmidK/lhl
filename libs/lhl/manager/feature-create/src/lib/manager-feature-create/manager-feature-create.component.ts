import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerCreateComponent } from '@lhl/manager/ui';
import { Manager, ManagerService } from '@lhl/manager/data-access';
import { Team, TeamService } from '@lhl/team/data-access';
import { firstValueFrom, map, Observable } from 'rxjs';

@Component({
  selector: 'lhl-manager-feature-create',
  standalone: true,
  imports: [CommonModule, ManagerCreateComponent],
  templateUrl: './manager-feature-create.component.html',
  styleUrls: ['./manager-feature-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagerFeatureCreateComponent {

  // Teams that don't currently have a manager
  availableTeams$: Observable<Array<Team>> = this._teamsService.getTeams().pipe(
    map(teams => teams.filter(team => team.managerId === ''))
  );

  constructor(private _managerService: ManagerService, private _teamsService: TeamService) {}

  create(manager: Manager) {
    firstValueFrom(this._managerService.createManager(manager));
  }
}
