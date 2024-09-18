import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ManagerInviteComponent {
    readonly title = "Invite a Manager";
    readonly cancelBtn = "Cancel";
    readonly submitBtn = "Submit";
    readonly requiredEmailError = "Email is required";
    readonly invalidEmailError = "Email is invalid";
    readonly emailHelper = "The email of the manager you want to invite";
    readonly emailLabel = "Email";
    readonly emailPlaceholder = "Enter a email...";
    emailInput: string;
    emailError: string;
    readonly nameError = "Your name is required";
    readonly nameHelper = "Your name that appears on the invitation";
    readonly nameLabel = "Name";
    readonly namePlaceholder = "Enter your name...";
    nameInput: string;
    readonly previewInvitationConstant = "is inviting you to play in the Little Fantasy Hockey League (LHL).";
    previewInvitationSubject$: BehaviorSubject<string>;
    previewInvitationText$: import("rxjs").Observable<string>;
    set inviter(inviter: string);
    constructor();
    onKeyUpName(): void;
    private setPreviewInvitationText;
    onClickSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManagerInviteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ManagerInviteComponent, "lhl-manager-invite", never, { "inviter": { "alias": "inviter"; "required": false; }; }, {}, never, never, true, never>;
}
