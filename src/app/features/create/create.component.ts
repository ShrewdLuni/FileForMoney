import { Component } from '@angular/core';
import { UploadComponent } from '../../shared/components/upload/upload.component';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FormControl, FormGroup } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'app-create',
    standalone: true,
    templateUrl: './create.component.html',
    imports: [UploadComponent, NavbarComponent,ReactiveFormsModule]
})
export class CreateComponent {
  createForm = new FormGroup({
    name: new FormControl<string>(''),
    description: new FormControl<string>(''),
    price: new FormControl<number>(0),
    downloadLimit: new FormControl<number>(0)
  });
}
