import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './upload.component.html',
})
export class UploadComponent {
  title = 'FileForMoney';
}
