import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-page-not-found',
    standalone: true,
    templateUrl: './page-not-found.component.html',
    imports: [RouterOutlet]
})
export class PageNotFoundComponent {
  title = 'FileForMoney';
}
