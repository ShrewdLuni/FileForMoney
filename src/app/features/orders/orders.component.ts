import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
    selector: 'app-orders',
    standalone: true,
    templateUrl: './orders.component.html',
    imports: [NavbarComponent]
})
export class OrdersComponent {
}
