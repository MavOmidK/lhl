import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITeam} from '@lhl/shared/domain';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private readonly http = inject(HttpClient);

  getAllTeams(): Observable<ITeam[]> {
    return this.http.get<ITeam[]>(`/api/teams`);
  }

  getTeamById(teamId: string): Observable<ITeam> {
    return this.http.get<ITeam>(`/api/teams/${teamId}`);
  }
}
