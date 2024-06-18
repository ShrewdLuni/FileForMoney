import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    imports: [NavbarComponent]
})
export class DashboardComponent {
  title = 'FileForMoney';
}
