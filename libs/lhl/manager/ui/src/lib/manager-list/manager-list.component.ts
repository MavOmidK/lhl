import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { Manager } from '@lhl/manager/data-access';
import { ManagerTableHeaders } from './model/manager-table-headers';
import { TeamNamePipe } from '@lhl/shared/utils/pipe';

@Component({
  selector: 'lhl-manager-list',
  standalone: true,
  imports: [CommonModule, ClarityModule, TeamNamePipe],
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagerListComponent {
  private _managers: Array<Manager> = [];
  
  @Input() set managers(managers: Array<Manager> | undefined | null) {
    if(managers) {
      this._managers = managers;
    }
  }

  get managers(): Array<Manager> {
    return this._managers;
  }

  get headers(): Array<string> {
    return Object.values(ManagerTableHeaders);
  }
}
