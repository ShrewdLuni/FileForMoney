import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UploadComponent } from '../upload/upload.component';
import { ConfirmComponent } from "../confirm/confirm.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    imports: [RouterOutlet, UploadComponent, ConfirmComponent]
})
export class MainComponent {
  title = 'FileForMoney';
}
