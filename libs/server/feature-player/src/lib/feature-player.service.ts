import {Injectable, NotFoundException} from '@nestjs/common';
import {IPlayer} from '@lhl/shared/domain';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class FeaturePlayerService {
  private players$$ = new BehaviorSubject<Array<IPlayer>>([
    {
      id: "1",
      firstName: "Sidney",
      lastName: "Crosby",
      owner: "1",
      age: 36
    },
    {
      id: "2",
      firstName: "Alexander",
      lastName: "Ovechkin",
      owner: "1",
      age: 38
    },
    {
      id: "3",
      firstName: "Auston",
      lastName: "Matthews",
      owner: "2",
      age: 26
    },
    {
      id: "4",
      firstName: "Connor",
      lastName: "McDavid",
      owner: "2",
      age: 27
    }
  ]);

  getAll(): Array<IPlayer> {
    return this.players$$.value;
  }

  getOne(id: string): IPlayer {
    const players = this.players$$.value.find(players => players.id === id);
    if (!players) {
      throw new NotFoundException(`players with id: ${id} could not be found!`)
    }
    return players;
  }
}
