import * as i0 from '@angular/core';
import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/common/http';

class ManagerDataAccessModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerDataAccessModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.8", ngImport: i0, type: ManagerDataAccessModule, imports: [CommonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerDataAccessModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ManagerDataAccessModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                }]
        }] });

class Manager {
    constructor(id, teamId, email, name, active, admin) {
        this.id = id;
        this.teamId = teamId;
        this.email = email;
        this.name = name;
        this.active = active;
        this.admin = admin;
    }
}

class ManagerService {
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

/**
 * Generated bundle index. Do not edit.
 */

export { Manager, ManagerDataAccessModule, ManagerService };
//# sourceMappingURL=lhl-manager-data-access.mjs.map
