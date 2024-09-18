import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ManagerService {
    constructor(http) {
        this.http = http;
        // TODO: Add Environment Variable
        this.managerUrl = 'http://localhost:8080/managers';
    }
    getManagers() {
        return this.http.get(this.managerUrl);
    }
    getManager(id) {
        return this.http.get(`${this.managerUrl}/${id}`);
    }
    createManager(manager) {
        return this.http.post(this.managerUrl, manager);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9saGwvbWFuYWdlci9kYXRhLWFjY2Vzcy9zcmMvbGliL3NlcnZpY2VzL21hbmFnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBSzNDLE1BQU0sT0FBTyxjQUFjO0lBTXZCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFKcEMsaUNBQWlDO1FBQ2hCLGVBQVUsR0FBRyxnQ0FBZ0MsQ0FBQztJQUd2QixDQUFDO0lBRWxDLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFpQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLFVBQVUsQ0FBQyxFQUFVO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVNLGFBQWEsQ0FBQyxPQUFnQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFVLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs4R0FsQlEsY0FBYztrSEFBZCxjQUFjLGNBREYsTUFBTTs7MkZBQ2xCLGNBQWM7a0JBRDFCLFVBQVU7bUJBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hbmFnZXIgfSBmcm9tICcuLi9tb2RlbC9tYW5hZ2VyLmNsYXNzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTWFuYWdlclNlcnZpY2Uge1xuXG4gICAgLy8gVE9ETzogQWRkIEVudmlyb25tZW50IFZhcmlhYmxlXG4gICAgcHJpdmF0ZSByZWFkb25seSBtYW5hZ2VyVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9tYW5hZ2Vycyc7XG4gICAgXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gICAgcHVibGljIGdldE1hbmFnZXJzKCk6IE9ic2VydmFibGU8QXJyYXk8TWFuYWdlcj4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8QXJyYXk8TWFuYWdlcj4+KHRoaXMubWFuYWdlclVybCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE1hbmFnZXIoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8TWFuYWdlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxNYW5hZ2VyPihgJHt0aGlzLm1hbmFnZXJVcmx9LyR7aWR9YCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZU1hbmFnZXIobWFuYWdlcjogTWFuYWdlcik6IE9ic2VydmFibGU8TWFuYWdlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8TWFuYWdlcj4odGhpcy5tYW5hZ2VyVXJsLCBtYW5hZ2VyKTtcbiAgICB9XG59XG4iXX0=