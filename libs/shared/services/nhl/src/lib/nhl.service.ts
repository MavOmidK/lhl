import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { SearchPlayerResponse } from './model/searchPlayer/search.player.response';
import { SearchPlayerRequest } from './model/searchPlayer/search.player.request';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NhlService {
  private readonly searchURL = 'https://search.d3.nhle.com/api/v1/search';

  constructor(private http: HttpClient) { }

  public searchPlayer(name: string): Observable<number> {
    const requestParams: SearchPlayerRequest = {
      region: 'en-us',
      limit: 2,
      name: name,
      active: true
    };

    const params = new HttpParams()
    .set("culture", requestParams.region)
    .set("limit", requestParams.limit.toString())
    .set("q", requestParams.name)
    .set("active", requestParams.active.toString());

    // https://search.d3.nhle.com/api/v1/search/player?culture=en-us&limit=2&q=Alex Ovechkin&active=true

    return this.http.get<Array<SearchPlayerResponse>>(`${this.searchURL}/player`, {params: params}).pipe(
      map(player => player[0].playerId)
    )
  }
}
