import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UploadComponent } from '../upload/upload.component';
import { ConfirmComponent } from "../confirm/confirm.component";
import { PriceInputComponent } from "../priceInput/priceInput.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    imports: [RouterOutlet, UploadComponent, ConfirmComponent, PriceInputComponent]
})
export class MainComponent {
  title = 'FileForMoney';
}
