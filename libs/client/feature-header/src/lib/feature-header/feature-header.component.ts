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
  logoImg = 'assets/logo.png'
  currentPageID = '1';

  pages: Array<Page> = [
    {id: '1', name: 'Home', url: ''}
  ]

  constructor(private router: Router) {}

  get abbrName(): string {
    return 'OK';
  }

  async onClickPage(page: Page) {
    this.currentPageID = page.id;
    await this.router.navigate([page.url]);
  }

  linkStyle(id: string): string {
    return this.currentPageID === id ? 'link-current' : '';
  }
}
