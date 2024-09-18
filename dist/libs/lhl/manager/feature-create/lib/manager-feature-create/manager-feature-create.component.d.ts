import { Manager, ManagerService } from '@lhl/manager/data-access';
import { Team, TeamService } from '@lhl/team/data-access';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ManagerFeatureCreateComponent {
    private _managerService;
    private _teamsService;
    availableTeams$: Observable<Array<Team>>;
    constructor(_managerService: ManagerService, _teamsService: TeamService);
    create(manager: Manager): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManagerFeatureCreateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ManagerFeatureCreateComponent, "lhl-manager-feature-create", never, {}, {}, never, never, true, never>;
}
