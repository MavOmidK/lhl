import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Team, TeamService } from '@lhl/team/data-access';
import { TeamListComponent } from '@lhl/team/ui';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'lhl-team-feature-view',
  standalone: true,
  imports: [CommonModule, TeamListComponent],
  templateUrl: './team-feature-view.component.html',
  styleUrls: ['./team-feature-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamFeatureViewComponent implements OnInit, OnDestroy{
  private _destroy$: Subject<void> = new Subject<void>();
  private _teams = this._teamService.getTeams().pipe(takeUntil(this._destroy$));

  teamsSubject$: Subject<Array<Team>> = new Subject<Array<Team>>();
  teams$: Observable<Array<Team>> = this.teamsSubject$.asObservable();

  constructor(private _teamService: TeamService) {}

  ngOnInit(): void {
    this._teams.subscribe(teams => this.teamsSubject$.next(teams));
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
