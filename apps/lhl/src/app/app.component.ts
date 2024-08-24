import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import {FeatureHeaderModule} from '@lhl/feature-header';

@Component({
  standalone: true,
  imports: [RouterModule, FeatureHeaderModule, ClarityModule],
  selector: 'lhl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lhl';
}
