import { PipeTransform } from '@angular/core';
import { ManagerService } from '@lhl/manager/data-access';
import * as i0 from "@angular/core";
export declare class ManagerNamePipe implements PipeTransform {
    private managerService;
    constructor(managerService: ManagerService);
    transform(managerId: string): Promise<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManagerNamePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ManagerNamePipe, "managerName", true>;
}
