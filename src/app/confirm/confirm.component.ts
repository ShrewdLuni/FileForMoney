import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './confirm.component.html',
})
export class ConfirmComponent {
  title = 'FileForMoney';
}
