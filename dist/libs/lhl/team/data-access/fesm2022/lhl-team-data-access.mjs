import * as i0 from '@angular/core';
import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/common/http';

class TeamDataAccessModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: TeamDataAccessModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.8", ngImport: i0, type: TeamDataAccessModule, imports: [CommonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: TeamDataAccessModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: TeamDataAccessModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                }]
        }] });

class TeamService {
    constructor(http) {
        this.http = http;
        this.teamUrl = 'http://localhost:8080/teams';
    }
    getTeam(id) {
        return this.http.get(`${this.teamUrl}/${id}`);
    }
    getTeams() {
        return this.http.get(this.teamUrl);
    }
    createTeam(team) {
        return this.http.post(this.teamUrl, team);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: TeamService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: TeamService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: TeamService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });

class Team {
    constructor(team) {
        this.id = team.id;
        this.managerId = team.managerId;
        this.name = team.name;
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { Team, TeamDataAccessModule, TeamService };
//# sourceMappingURL=lhl-team-data-access.mjs.map
