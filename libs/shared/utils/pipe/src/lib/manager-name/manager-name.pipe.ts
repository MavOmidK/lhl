import { Pipe, PipeTransform } from '@angular/core';
import { ManagerService } from '@lhl/manager/data-access';
import { firstValueFrom, map } from 'rxjs';

@Pipe({
  name: 'managerName',
  standalone: true,
})
export class ManagerNamePipe implements PipeTransform {
  
  constructor(private managerService: ManagerService) {}

  transform(managerId: string) {
    return firstValueFrom(this.managerService.getManager(managerId).pipe(map(manager => manager.name)));
  }
}
