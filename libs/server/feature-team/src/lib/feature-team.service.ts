import {Injectable, NotFoundException} from '@nestjs/common';
import {ITeam} from '@lhl/shared/domain';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class FeatureTeamService {
  private teams$$ = new BehaviorSubject<Array<ITeam>>([
    {
      id: "1",
      manager: "1",
      name: "Old Guns",
      players: ['1', '2']
    },
    {
      id: "2",
      manager: "2",
      name: "Young Bloods",
      players: ['3', '4']
    }
  ]);

  getAll(): Array<ITeam> {
    return this.teams$$.value;
  }

  getOne(id: string): ITeam {
    const team = this.teams$$.value.find(team => team.id === id);
    if (!team) {
      throw new NotFoundException(`Team with id: ${id} could not be found!`)
    }
    return team;
  }
}
