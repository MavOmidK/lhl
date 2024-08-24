import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Manager } from '@lhl/manager/data-access';
import { ClrCheckboxModule, ClrFormsModule, ClrModal, ClrModalModule, ClrSelectModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { Team } from '@lhl/team/data-access';

@Component({
  selector: 'lhl-manager-create',
  standalone: true,
  imports: [CommonModule, ClrModalModule, ClrFormsModule, FormsModule, ClrCheckboxModule, ClrSelectModule],
  templateUrl: './manager-create.component.html',
  styleUrls: ['./manager-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagerCreateComponent {
  @ViewChild('createManagerModal', { static: true }) modal: ClrModal | undefined;

  @Input() availableTeams: Array<Team> = [];

  @Output() create: EventEmitter<Manager> = new EventEmitter<Manager>();

  opened = false;
  size = 'md';

  // Form Properties
  name = '';
  email = '';
  teamId = '';
  admin = false;
  selectedOption = 'one';

  constructor() {}

  get teamsWarning() {
    return this.availableTeams.length === 0;
  }

  onClickPlusIcon(): void {
    this.modal?.open();
  }

  onClickCreate() {

    this.create.emit(this.newManager);
    this.modal?.close();
  }

  onClickCancel() {
    this.modal?.close();
  }

  private get newManager(): Manager {
    return new Manager('', this.teamId, this.email, this.name, this.teamId !== '', this.admin);
  }
}
