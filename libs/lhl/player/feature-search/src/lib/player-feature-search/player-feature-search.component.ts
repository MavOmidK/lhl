import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NhlService } from '@lhl/shared-services-nhl';
import { Player } from '@lhl/shared/domain';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'lhl-player-feature-search',
  templateUrl: './player-feature-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NhlService]
})
export class PlayerFeatureSearchComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  searchName = '';

  playersSubject$ = new Subject<string>();
  players$ = this.playersSubject$.asObservable().pipe(takeUntil(this.destroy$),
    switchMap(name => this.nhlService.searchPlayer(name)),
    tap(players => {
        this.players = players
        this.changeDetectorRef.detectChanges();
      }),
  );
  players: Array<Player> = [];

  constructor(private nhlService: NhlService, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.players$.subscribe();
  }

  onKeyDownPlayerSearch(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.playersSubject$.next(this.searchName);
    }
  }
}
