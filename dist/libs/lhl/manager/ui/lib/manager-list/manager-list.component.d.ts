import { Manager } from '@lhl/manager/data-access';
import * as i0 from "@angular/core";
export declare class ManagerListComponent {
    private _managers;
    set managers(managers: Array<Manager> | undefined | null);
    get managers(): Array<Manager>;
    get headers(): Array<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManagerListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ManagerListComponent, "lhl-manager-list", never, { "managers": { "alias": "managers"; "required": false; }; }, {}, never, never, true, never>;
}
