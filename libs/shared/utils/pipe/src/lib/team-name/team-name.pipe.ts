import { Pipe, PipeTransform } from '@angular/core';
import { TeamService } from '@lhl/team/data-access';
import { firstValueFrom, map } from 'rxjs';

@Pipe({
  name: 'teamName',
  standalone: true,
})
export class TeamNamePipe implements PipeTransform {

  constructor(private teamService: TeamService) {}

  transform(teamId: string) {
    return firstValueFrom(this.teamService.getTeam(teamId).pipe(map(team => team.name)));
  }
}
