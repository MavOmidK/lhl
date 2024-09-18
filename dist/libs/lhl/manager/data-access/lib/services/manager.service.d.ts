import { HttpClient } from '@angular/common/http';
import { Manager } from '../model/manager.class';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ManagerService {
    private http;
    private readonly managerUrl;
    constructor(http: HttpClient);
    getManagers(): Observable<Array<Manager>>;
    getManager(id: string): Observable<Manager>;
    createManager(manager: Manager): Observable<Manager>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManagerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ManagerService>;
}
