import { Pipe } from '@angular/core';
import { TeamService } from '@lhl/team/data-access';
import { firstValueFrom, map } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@lhl/team/data-access";
export class TeamNamePipe {
    constructor(teamService) {
        this.teamService = teamService;
    }
    transform(teamId) {
        return firstValueFrom(this.teamService.getTeam(teamId).pipe(map(team => team.name)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: TeamNamePipe, deps: [{ token: i1.TeamService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.8", ngImport: i0, type: TeamNamePipe, isStandalone: true, name: "teamName" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: TeamNamePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'teamName',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i1.TeamService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbS1uYW1lLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3NoYXJlZC91dGlscy9waXBlL3NyYy9saWIvdGVhbS1uYW1lL3RlYW0tbmFtZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBTTNDLE1BQU0sT0FBTyxZQUFZO0lBRXZCLFlBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUVoRCxTQUFTLENBQUMsTUFBYztRQUN0QixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDOzhHQU5VLFlBQVk7NEdBQVosWUFBWTs7MkZBQVosWUFBWTtrQkFKeEIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsVUFBVTtvQkFDaEIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVhbVNlcnZpY2UgfSBmcm9tICdAbGhsL3RlYW0vZGF0YS1hY2Nlc3MnO1xuaW1wb3J0IHsgZmlyc3RWYWx1ZUZyb20sIG1hcCB9IGZyb20gJ3J4anMnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd0ZWFtTmFtZScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFRlYW1OYW1lUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVhbVNlcnZpY2U6IFRlYW1TZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybSh0ZWFtSWQ6IHN0cmluZykge1xuICAgIHJldHVybiBmaXJzdFZhbHVlRnJvbSh0aGlzLnRlYW1TZXJ2aWNlLmdldFRlYW0odGVhbUlkKS5waXBlKG1hcCh0ZWFtID0+IHRlYW0ubmFtZSkpKTtcbiAgfVxufVxuIl19