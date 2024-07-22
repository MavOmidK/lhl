import {Injectable, NotFoundException} from '@nestjs/common';
import {BehaviorSubject} from 'rxjs';
import {IManager} from '@lhl/shared/domain';

@Injectable()
export class FeatureManagerService {
  private managers$$ = new BehaviorSubject<Array<IManager>>(  [
    {
      id: "1",
      email: "manager1@example.com",
      firstName: "John",
      lastName: "Doe",
      active: true
    },
    {
      id: "2",
      email: "manager2@example.com",
      firstName: "Jane",
      lastName: "Doe",
      active: false
    }
  ]);

  getAll(): Array<IManager> {
    return this.managers$$.value;
  }

  getOne(id: string): IManager {
    const manager = this.managers$$.value.find(manager => manager.id === id);
    if (!manager) {
      throw new NotFoundException(`manager with id: ${id} could not be found!`)
    }
    return manager;
  }

}


