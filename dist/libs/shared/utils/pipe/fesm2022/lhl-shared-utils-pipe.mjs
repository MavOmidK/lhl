import * as i0 from '@angular/core';
import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1 from '@lhl/team/data-access';
import { firstValueFrom, map } from 'rxjs';
import * as i1$1 from '@lhl/manager/data-access';

class SharedUtilPipeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: SharedUtilPipeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.8", ngImport: i0, type: SharedUtilPipeModule, imports: [CommonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: SharedUtilPipeModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: SharedUtilPipeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [],
                    exports: [],
                }]
        }] });

class TeamNamePipe {
    constructor(teamService) {
        this.teamService = teamService;
    }
    transform(teamId) {
        return firstValueFrom(this.teamService.getTeam(teamId).pipe(map(team => team.name)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: TeamNamePipe, deps: [{ token: i1.TeamService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.8", ngImport: i0, type: TeamNamePipe, isStandalone: true, name: "teamName" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: TeamNamePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'teamName',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i1.TeamService }]; } });

class ManagerNamePipe {
    constructor(managerService) {
        this.managerService = managerService;
    }
    transform(managerId) {
        return firstValueFrom(this.managerService.getManager(managerId).pipe(map(manager => manager.name)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerNamePipe, deps: [{ token: i1$1.ManagerService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.8", ngImport: i0, type: ManagerNamePipe, isStandalone: true, name: "managerName" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerNamePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'managerName',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ManagerService }]; } });

/**
 * Generated bundle index. Do not edit.
 */

export { ManagerNamePipe, SharedUtilPipeModule, TeamNamePipe };
//# sourceMappingURL=lhl-shared-utils-pipe.mjs.map
