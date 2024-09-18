import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manager } from '../model/manager.class';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ManagerService {

    // TODO: Add Environment Variable
    private readonly managerUrl = 'http://localhost:8080/managers';
    

    constructor(private http: HttpClient) { }

    public getManagers(): Observable<Array<Manager>> {
        return this.http.get<Array<Manager>>(this.managerUrl);
    }

    public getManager(id: string): Observable<Manager> {
        return this.http.get<Manager>(`${this.managerUrl}/${id}`);
    }

    public createManager(manager: Manager): Observable<Manager> {
        return this.http.post<Manager>(this.managerUrl, manager);
    }
}
