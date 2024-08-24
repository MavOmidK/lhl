import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerListComponent } from '@lhl/manager/ui';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Manager, ManagerService } from '@lhl/manager/data-access';

@Component({
  selector: 'lhl-manager-feature-view',
  standalone: true,
  imports: [CommonModule, ManagerListComponent],
  templateUrl: './manager-feature-view.component.html',
  styleUrls: ['./manager-feature-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagerFeatureViewComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<void> = new Subject<void>();
  private _managers = this._managerService.getManagers().pipe(takeUntil(this._destroy$));

  managersSubject$: Subject<Array<Manager>> = new Subject<Array<Manager>>
  managers$: Observable<Array<Manager>> = this.managersSubject$.asObservable();

  constructor(private _managerService: ManagerService) {}

  ngOnInit(): void {
    this._managers.subscribe(managers => this.managersSubject$.next(managers));
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
