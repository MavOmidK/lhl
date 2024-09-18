import * as i0 from '@angular/core';
import { NgModule, Component, ChangeDetectionStrategy, Input, EventEmitter, ViewChild, Output } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@clr/angular';
import { ClrInputModule, ClrIconModule, ClrButtonModule, ClrFormsModule, ClrModalModule, ClarityModule, ClrCheckboxModule, ClrSelectModule } from '@clr/angular';
import * as i3 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { TeamNamePipe } from '@lhl/shared/utils/pipe';
import { Manager } from '@lhl/manager/data-access';

class ManagerUiModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.8", ngImport: i0, type: ManagerUiModule, imports: [CommonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerUiModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerUiModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule,],
                    declarations: [],
                    exports: [],
                }]
        }] });

class ManagerInviteComponent {
    set inviter(inviter) {
        this.nameInput = inviter;
        this.previewInvitationSubject$.next(this.setPreviewInvitationText());
    }
    constructor() {
        this.title = 'Invite a Manager';
        this.cancelBtn = 'Cancel';
        this.submitBtn = 'Submit';
        this.requiredEmailError = 'Email is required';
        this.invalidEmailError = 'Email is invalid';
        this.emailHelper = 'The email of the manager you want to invite';
        this.emailLabel = 'Email';
        this.emailPlaceholder = 'Enter a email...';
        this.emailInput = '';
        this.emailError = '';
        this.nameError = 'Your name is required';
        this.nameHelper = 'Your name that appears on the invitation';
        this.nameLabel = 'Name';
        this.namePlaceholder = 'Enter your name...';
        this.nameInput = '';
        this.previewInvitationConstant = 'is inviting you to play in the Little Fantasy Hockey League (LHL).';
        this.previewInvitationSubject$ = new BehaviorSubject('');
        this.previewInvitationText$ = this.previewInvitationSubject$.asObservable();
    }
    onKeyUpName() {
        this.previewInvitationSubject$.next(this.setPreviewInvitationText());
    }
    setPreviewInvitationText() {
        return `<strong>${this.nameInput}</strong> ${this.previewInvitationConstant}`;
    }
    onClickSubmit() {
        // If no Errors
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerInviteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.8", type: ManagerInviteComponent, isStandalone: true, selector: "lhl-manager-invite", inputs: { inviter: "inviter" }, ngImport: i0, template: "", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: ClrInputModule }, { kind: "ngmodule", type: ClrIconModule }, { kind: "ngmodule", type: ClrButtonModule }, { kind: "ngmodule", type: FormsModule }, { kind: "ngmodule", type: ClrFormsModule }, { kind: "ngmodule", type: ClrModalModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerInviteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lhl-manager-invite', standalone: true, imports: [CommonModule, ClrInputModule, ClrIconModule, ClrButtonModule, FormsModule, ClrFormsModule, ClrModalModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "" }]
        }], ctorParameters: function () { return []; }, propDecorators: { inviter: [{
                type: Input
            }] } });

var ManagerTableHeaders;
(function (ManagerTableHeaders) {
    ManagerTableHeaders["Name"] = "Name";
    ManagerTableHeaders["TeamName"] = "Team Name";
    ManagerTableHeaders["Email"] = "Email";
    ManagerTableHeaders["Commisioner"] = "Commisioner";
})(ManagerTableHeaders || (ManagerTableHeaders = {}));

class ManagerListComponent {
    constructor() {
        this._managers = [];
    }
    set managers(managers) {
        if (managers) {
            this._managers = managers;
        }
    }
    get managers() {
        return this._managers;
    }
    get headers() {
        return Object.values(ManagerTableHeaders);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.8", type: ManagerListComponent, isStandalone: true, selector: "lhl-manager-list", inputs: { managers: "managers" }, ngImport: i0, template: "<table class=\"table\">\n    <thead>\n        <tr>\n            <th *ngFor=\"let header of headers\">{{header}}</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let manager of managers\">\n            <td>\n                <span>{{manager.name}}</span>\n            </td>\n            <td *ngIf=\"manager.teamId\">\n                <span>{{manager.teamId | teamName | async}}</span>\n            </td>\n            <td *ngIf=\"!manager.teamId\">\n                <span>N/A</span>\n            </td>\n            <td>\n                <span>{{manager.email}}</span>\n            </td>\n            <td>\n                <span>{{manager.admin}}</span>\n            </td>\n        </tr>\n    </tbody>\n</table>", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "ngmodule", type: ClarityModule }, { kind: "pipe", type: TeamNamePipe, name: "teamName" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lhl-manager-list', standalone: true, imports: [CommonModule, ClarityModule, TeamNamePipe], changeDetection: ChangeDetectionStrategy.OnPush, template: "<table class=\"table\">\n    <thead>\n        <tr>\n            <th *ngFor=\"let header of headers\">{{header}}</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let manager of managers\">\n            <td>\n                <span>{{manager.name}}</span>\n            </td>\n            <td *ngIf=\"manager.teamId\">\n                <span>{{manager.teamId | teamName | async}}</span>\n            </td>\n            <td *ngIf=\"!manager.teamId\">\n                <span>N/A</span>\n            </td>\n            <td>\n                <span>{{manager.email}}</span>\n            </td>\n            <td>\n                <span>{{manager.admin}}</span>\n            </td>\n        </tr>\n    </tbody>\n</table>" }]
        }], propDecorators: { managers: [{
                type: Input
            }] } });

class ManagerCreateComponent {
    constructor() {
        this.availableTeams = [];
        this.create = new EventEmitter();
        this.opened = false;
        this.size = 'md';
        // Form Properties
        this.name = '';
        this.email = '';
        this.teamId = '';
        this.admin = false;
        this.selectedOption = 'one';
    }
    get teamsWarning() {
        return this.availableTeams.length === 0;
    }
    onClickPlusIcon() {
        this.modal?.open();
    }
    onClickCreate() {
        this.create.emit(this.newManager);
        this.modal?.close();
    }
    onClickCancel() {
        this.modal?.close();
    }
    get newManager() {
        return new Manager('', this.teamId, this.email, this.name, this.teamId !== '', this.admin);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerCreateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.8", type: ManagerCreateComponent, isStandalone: true, selector: "lhl-manager-create", inputs: { availableTeams: "availableTeams" }, outputs: { create: "create" }, viewQueries: [{ propertyName: "modal", first: true, predicate: ["createManagerModal"], descendants: true, static: true }], ngImport: i0, template: "<button class=\"btn btn-outline\" (click)=\"onClickPlusIcon()\">\n    <i class=\"fa-regular fa-plus\"></i>\n</button>\n\n<clr-modal #createManagerModal [(clrModalOpen)]=\"opened\" [clrModalSize]=\"size\">\n    <div class=\"modal-title\">Add a Manager</div>\n    <div class=\"modal-body\">\n        <form clrForm>\n            <clr-input-container>\n                <label>Name</label>\n                <input clrInput type=\"text\" [(ngModel)]=\"name\" required name=\"name\"/>\n            </clr-input-container>\n            <clr-input-container>\n                <label>Email</label>\n                <input clrInput type=\"email\" [(ngModel)]=\"email\" required name=\"email\" />\n            </clr-input-container>\n            <clr-select-container>\n                <label>Team</label>\n                <div *ngIf=\"teamsWarning\">No available teams</div>\n                <select clrSelect [(ngModel)]=\"teamId\" name=\"team\">\n                    <option *ngFor=\"let availableTeam of availableTeams\" [value]=\"availableTeam.id\">{{availableTeam.name}}</option>\n                </select>\n            </clr-select-container>\n          </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"onClickCancel()\">Cancel</button>\n        <button type=\"button\" type=\"submit\" class=\"btn btn-primary\" (click)=\"onClickCreate()\">Create</button>\n     </div>\n</clr-modal>", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ClrModalModule }, { kind: "component", type: i2.ClrModal, selector: "clr-modal", inputs: ["clrModalOpen", "clrModalClosable", "clrModalCloseButtonAriaLabel", "clrModalSize", "clrModalStaticBackdrop", "clrModalSkipAnimation", "clrModalPreventClose", "clrModalLabelledById", "clrModalOverrideScrollService"], outputs: ["clrModalOpenChange", "clrModalAlternateClose"] }, { kind: "directive", type: i2.ClrModalBody, selector: ".modal-body" }, { kind: "ngmodule", type: ClrFormsModule }, { kind: "directive", type: i2.ClrLabel, selector: "label", inputs: ["for"] }, { kind: "directive", type: i2.ClrForm, selector: "[clrForm]", inputs: ["clrLabelSize"] }, { kind: "directive", type: i2.ClrInput, selector: "[clrInput]" }, { kind: "component", type: i2.ClrInputContainer, selector: "clr-input-container" }, { kind: "directive", type: i2.ClrSelect, selector: "[clrSelect]" }, { kind: "component", type: i2.ClrSelectContainer, selector: "clr-select-container" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i3.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: ClrCheckboxModule }, { kind: "ngmodule", type: ClrSelectModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerCreateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lhl-manager-create', standalone: true, imports: [CommonModule, ClrModalModule, ClrFormsModule, FormsModule, ClrCheckboxModule, ClrSelectModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<button class=\"btn btn-outline\" (click)=\"onClickPlusIcon()\">\n    <i class=\"fa-regular fa-plus\"></i>\n</button>\n\n<clr-modal #createManagerModal [(clrModalOpen)]=\"opened\" [clrModalSize]=\"size\">\n    <div class=\"modal-title\">Add a Manager</div>\n    <div class=\"modal-body\">\n        <form clrForm>\n            <clr-input-container>\n                <label>Name</label>\n                <input clrInput type=\"text\" [(ngModel)]=\"name\" required name=\"name\"/>\n            </clr-input-container>\n            <clr-input-container>\n                <label>Email</label>\n                <input clrInput type=\"email\" [(ngModel)]=\"email\" required name=\"email\" />\n            </clr-input-container>\n            <clr-select-container>\n                <label>Team</label>\n                <div *ngIf=\"teamsWarning\">No available teams</div>\n                <select clrSelect [(ngModel)]=\"teamId\" name=\"team\">\n                    <option *ngFor=\"let availableTeam of availableTeams\" [value]=\"availableTeam.id\">{{availableTeam.name}}</option>\n                </select>\n            </clr-select-container>\n          </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"onClickCancel()\">Cancel</button>\n        <button type=\"button\" type=\"submit\" class=\"btn btn-primary\" (click)=\"onClickCreate()\">Create</button>\n     </div>\n</clr-modal>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { modal: [{
                type: ViewChild,
                args: ['createManagerModal', { static: true }]
            }], availableTeams: [{
                type: Input
            }], create: [{
                type: Output
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { ManagerCreateComponent, ManagerInviteComponent, ManagerListComponent, ManagerUiModule };
//# sourceMappingURL=lhl-manager-ui.mjs.map
