import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FeatureHeaderModule} from '@lhl/client/feature-header';


@Component({
  standalone: true,
  imports: [RouterModule, FeatureHeaderModule],
  selector: 'lhl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';
}
