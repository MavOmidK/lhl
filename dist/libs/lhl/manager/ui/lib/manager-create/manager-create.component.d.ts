import { EventEmitter } from '@angular/core';
import { Manager } from '@lhl/manager/data-access';
import { ClrModal } from '@clr/angular';
import { Team } from '@lhl/team/data-access';
import * as i0 from "@angular/core";
export declare class ManagerCreateComponent {
    modal: ClrModal | undefined;
    availableTeams: Array<Team>;
    create: EventEmitter<Manager>;
    opened: boolean;
    size: string;
    name: string;
    email: string;
    teamId: string;
    admin: boolean;
    selectedOption: string;
    constructor();
    get teamsWarning(): boolean;
    onClickPlusIcon(): void;
    onClickCreate(): void;
    onClickCancel(): void;
    private get newManager();
    static ɵfac: i0.ɵɵFactoryDeclaration<ManagerCreateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ManagerCreateComponent, "lhl-manager-create", never, { "availableTeams": { "alias": "availableTeams"; "required": false; }; }, { "create": "create"; }, never, never, true, never>;
}
