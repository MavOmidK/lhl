import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Page} from './models/page';
import {Router} from '@angular/router';

@Component({
  selector: 'lhl-feature-header',
  templateUrl: './feature-header.component.html',
  styleUrls: ['./feature-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureHeaderComponent {
  readonly pages = [
    {id: '1', name: 'Managers', url: 'managers'},
    {id: '2', name: 'Teams', url: 'teams'},
    {id: '3', name: 'Players', url: 'players'}, 
  ]
  readonly logoImg = 'assets/logo.png';

  currentPageID = '1';

  constructor(private router: Router) {}

  async onClickPage(page: Page) {
    this.currentPageID = page.id;
    await this.router.navigate([page.url]);
  }

  linkStyle(id: string): string {
    return this.currentPageID === id ? 'link-current' : '';
  }
}
