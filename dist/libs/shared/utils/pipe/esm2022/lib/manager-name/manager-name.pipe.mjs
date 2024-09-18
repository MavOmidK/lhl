import { Pipe } from '@angular/core';
import { ManagerService } from '@lhl/manager/data-access';
import { firstValueFrom, map } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@lhl/manager/data-access";
export class ManagerNamePipe {
    constructor(managerService) {
        this.managerService = managerService;
    }
    transform(managerId) {
        return firstValueFrom(this.managerService.getManager(managerId).pipe(map(manager => manager.name)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerNamePipe, deps: [{ token: i1.ManagerService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.8", ngImport: i0, type: ManagerNamePipe, isStandalone: true, name: "managerName" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerNamePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'managerName',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i1.ManagerService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci1uYW1lLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3NoYXJlZC91dGlscy9waXBlL3NyYy9saWIvbWFuYWdlci1uYW1lL21hbmFnZXItbmFtZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBTTNDLE1BQU0sT0FBTyxlQUFlO0lBRTFCLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFHLENBQUM7SUFFdEQsU0FBUyxDQUFDLFNBQWlCO1FBQ3pCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7OEdBTlUsZUFBZTs0R0FBZixlQUFlOzsyRkFBZixlQUFlO2tCQUozQixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxhQUFhO29CQUNuQixVQUFVLEVBQUUsSUFBSTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYW5hZ2VyU2VydmljZSB9IGZyb20gJ0BsaGwvbWFuYWdlci9kYXRhLWFjY2Vzcyc7XG5pbXBvcnQgeyBmaXJzdFZhbHVlRnJvbSwgbWFwIH0gZnJvbSAncnhqcyc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ21hbmFnZXJOYW1lJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgTWFuYWdlck5hbWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hbmFnZXJTZXJ2aWNlOiBNYW5hZ2VyU2VydmljZSkge31cblxuICB0cmFuc2Zvcm0obWFuYWdlcklkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZmlyc3RWYWx1ZUZyb20odGhpcy5tYW5hZ2VyU2VydmljZS5nZXRNYW5hZ2VyKG1hbmFnZXJJZCkucGlwZShtYXAobWFuYWdlciA9PiBtYW5hZ2VyLm5hbWUpKSk7XG4gIH1cbn1cbiJdfQ==