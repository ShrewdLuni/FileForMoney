import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-navbarLayout',
    standalone: true,
    templateUrl: './navbarLayout.component.html',
    imports: [RouterOutlet, NavbarComponent]
})
export class NavbarLayoutComponent {

}
