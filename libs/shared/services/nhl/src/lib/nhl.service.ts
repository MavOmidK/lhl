import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { SearchPlayerResponse } from './model/searchPlayer/search.player.response';
import { SearchPlayerRequest } from './model/searchPlayer/search.player.request';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { Player } from '@lhl/shared/domain';

@Injectable({
  providedIn: 'root'
})
export class NhlService {
  private readonly searchURL = 'https://search.d3.nhle.com/api/v1/search';
  private readonly playerImgURL = 'https://assets.nhle.com/mugs/nhl/latest';

  constructor(private http: HttpClient) { }

  private region = 'en-us';
  private limit = 5;
  private active = true

  public searchPlayer(name: string): Observable<Array<Player>> {
    const requestParams: SearchPlayerRequest = {
      region: this.region,
      limit: this.limit, 
      name: name,
      active: this.active
    };

    const params = new HttpParams()
    .set("culture", requestParams.region)
    .set("limit", requestParams.limit.toString())
    .set("q", requestParams.name)
    .set("active", requestParams.active.toString());

    return this.http.get<Array<SearchPlayerResponse>>(`${this.searchURL}/player`, {params: params}).pipe(
      mergeMap(playersResponse => playersResponse),
      map(playerResponse => this.mapPlayer(playerResponse)),
      toArray()
    )
  }

  // TODO: CORS Is preventing this request from being made. It might work coming from a non-local environment.
  public getPlayerImageURL(playerId: string): Observable<Blob> {
    const requestHeaders = new HttpHeaders()
    .set('User-Agent', 'PostmanRuntime/7.40.0')
    .set('Host', 'assets.nhle.com')
    .set('Accept-Encoding', 'gzip, deflate, br');
  
    return this.http.get<Blob>(`${this.playerImgURL}/${playerId}.png`, {headers: requestHeaders});  
  }

  // Helper

  private mapPlayer(playerResponse: SearchPlayerResponse): Player {
    return new Player({
      id: playerResponse.playerId,
      name: playerResponse.name,
      nhlTeamAbbrev: playerResponse.lastTeamAbbrev,
      position: playerResponse.positionCode
    });
  }
}
