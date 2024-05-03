import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-priceInput',
    standalone: true,
    templateUrl: './PriceInput.component.html',
    imports: [RouterOutlet]
})
export class PriceInputComponent {
  title = 'FileForMoney';
}
