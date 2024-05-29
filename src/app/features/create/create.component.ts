import { Component } from '@angular/core';
import { UploadComponent } from '../../shared/components/upload/upload.component';
import { ConfirmComponent } from "../../shared/components/confirm/confirm.component";
import { PriceInputComponent } from "../../shared/components/priceInput/priceInput.component";

@Component({
  selector: 'app-create',
  standalone: true,
  templateUrl: './create.component.html',
  imports: [UploadComponent, ConfirmComponent, PriceInputComponent]
})
export class CreateComponent {
  title = 'FileForMoney';
}
