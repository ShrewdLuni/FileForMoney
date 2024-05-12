import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateComponent } from "./features/create/create.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AppComponent, CreateComponent]
})
export class AppComponent {
  title = 'FileForMoney';
}
