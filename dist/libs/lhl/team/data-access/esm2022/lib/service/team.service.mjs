import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class TeamService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9saGwvdGVhbS9kYXRhLWFjY2Vzcy9zcmMvbGliL3NlcnZpY2UvdGVhbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFLM0MsTUFBTSxPQUFPLFdBQVc7SUFJcEIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZuQixZQUFPLEdBQUcsNkJBQTZCLENBQUM7SUFFakIsQ0FBQztJQUVsQyxPQUFPLENBQUMsRUFBVTtRQUNyQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVNLFVBQVUsQ0FBQyxJQUFVO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDOzhHQWhCUSxXQUFXO2tIQUFYLFdBQVcsY0FEQyxNQUFNOzsyRkFDbEIsV0FBVztrQkFEdkIsVUFBVTttQkFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZWFtIH0gZnJvbSAnLi4vbW9kZWwvdGVhbS5jbGFzcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIFRlYW1TZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGVhbVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvdGVhbXMnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICAgIHB1YmxpYyBnZXRUZWFtKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFRlYW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VGVhbT4oYCR7dGhpcy50ZWFtVXJsfS8ke2lkfWApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRUZWFtcygpOiBPYnNlcnZhYmxlPEFycmF5PFRlYW0+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEFycmF5PFRlYW0+Pih0aGlzLnRlYW1VcmwpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVUZWFtKHRlYW06IFRlYW0pOiBPYnNlcnZhYmxlPFRlYW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFRlYW0+KHRoaXMudGVhbVVybCwgdGVhbSk7XG4gICAgfVxufVxuIl19