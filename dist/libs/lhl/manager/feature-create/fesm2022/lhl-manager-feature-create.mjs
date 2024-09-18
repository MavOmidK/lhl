import * as i0 from '@angular/core';
import { NgModule, Component, ChangeDetectionStrategy } from '@angular/core';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import { ManagerCreateComponent } from '@lhl/manager/ui';
import * as i1 from '@lhl/manager/data-access';
import * as i2 from '@lhl/team/data-access';
import { map, firstValueFrom } from 'rxjs';

class FeatureCreateModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: FeatureCreateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.8", ngImport: i0, type: FeatureCreateModule, imports: [CommonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: FeatureCreateModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: FeatureCreateModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                }]
        }] });

class ManagerFeatureCreateComponent {
    constructor(_managerService, _teamsService) {
        this._managerService = _managerService;
        this._teamsService = _teamsService;
        // Teams that don't currently have a manager
        this.availableTeams$ = this._teamsService.getTeams().pipe(map(teams => teams.filter(team => team.managerId === '')));
    }
    create(manager) {
        firstValueFrom(this._managerService.createManager(manager));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerFeatureCreateComponent, deps: [{ token: i1.ManagerService }, { token: i2.TeamService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.8", type: ManagerFeatureCreateComponent, isStandalone: true, selector: "lhl-manager-feature-create", ngImport: i0, template: "<lhl-manager-create [availableTeams]=\"(availableTeams$ | async) ?? []\" (create)=\"create($event)\"></lhl-manager-create>", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }, { kind: "component", type: ManagerCreateComponent, selector: "lhl-manager-create", inputs: ["availableTeams"], outputs: ["create"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerFeatureCreateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lhl-manager-feature-create', standalone: true, imports: [CommonModule, ManagerCreateComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<lhl-manager-create [availableTeams]=\"(availableTeams$ | async) ?? []\" (create)=\"create($event)\"></lhl-manager-create>" }]
        }], ctorParameters: function () { return [{ type: i1.ManagerService }, { type: i2.TeamService }]; } });

/**
 * Generated bundle index. Do not edit.
 */

export { FeatureCreateModule, ManagerFeatureCreateComponent };
//# sourceMappingURL=lhl-manager-feature-create.mjs.map
