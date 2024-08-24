import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClrButtonModule, ClrIconModule, ClrInputModule, ClrFormsModule, ClrModalModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'lhl-manager-invite',
  standalone: true,
  imports: [CommonModule, ClrInputModule, ClrIconModule, ClrButtonModule, FormsModule, ClrFormsModule, ClrModalModule],
  templateUrl: './manager-invite.component.html',
  styleUrls: ['./manager-invite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagerInviteComponent {
  readonly title = 'Invite a Manager';
  readonly cancelBtn = 'Cancel';
  readonly submitBtn = 'Submit';

  readonly requiredEmailError = 'Email is required';
  readonly invalidEmailError = 'Email is invalid';
  readonly emailHelper = 'The email of the manager you want to invite';
  readonly emailLabel = 'Email';
  readonly emailPlaceholder = 'Enter a email...';
  emailInput = '';
  emailError = '';

  readonly nameError = 'Your name is required';
  readonly nameHelper = 'Your name that appears on the invitation';
  readonly nameLabel = 'Name';
  readonly namePlaceholder = 'Enter your name...';
  nameInput = '';

  readonly previewInvitationConstant = 'is inviting you to play in the Little Fantasy Hockey League (LHL).';
  previewInvitationSubject$ = new BehaviorSubject<string>('');
  previewInvitationText$ = this.previewInvitationSubject$.asObservable();

  @Input() set inviter(inviter: string){
    this.nameInput = inviter;
    this.previewInvitationSubject$.next(this.setPreviewInvitationText());
  }

  constructor() {}

  onKeyUpName() {
    this.previewInvitationSubject$.next(this.setPreviewInvitationText());
  }
  
  private setPreviewInvitationText() {
    return `<strong>${this.nameInput}</strong> ${this.previewInvitationConstant}`;
  }

  onClickSubmit() {
    // If no Errors
  }
}
