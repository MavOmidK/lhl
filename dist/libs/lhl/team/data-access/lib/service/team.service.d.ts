import { HttpClient } from '@angular/common/http';
import { Team } from '../model/team.class';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class TeamService {
    private http;
    private readonly teamUrl;
    constructor(http: HttpClient);
    getTeam(id: string): Observable<Team>;
    getTeams(): Observable<Array<Team>>;
    createTeam(team: Team): Observable<Team>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TeamService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TeamService>;
}
