
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../model/team.class';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TeamService {

    private readonly teamUrl = 'http://localhost:8080/teams';

    constructor(private http: HttpClient) { }

    public getTeam(id: string): Observable<Team> {
        return this.http.get<Team>(`${this.teamUrl}/${id}`);
    }

    public getTeams(): Observable<Array<Team>> {
        return this.http.get<Array<Team>>(this.teamUrl);
    }

    public createTeam(team: Team): Observable<Team> {
        return this.http.post<Team>(this.teamUrl, team);
    }
}
