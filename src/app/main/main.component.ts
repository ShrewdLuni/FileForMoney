import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UploadComponent } from '../upload/upload.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,UploadComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {
  title = 'FileForMoney';
}
