import { Component, Input } from '@angular/core';
import { NavItemComponent } from '../navItem/navItem.component';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    imports: [NavItemComponent]
})
export class NavbarComponent {
    @Input() navbarItems = [
    {label : "Home",icon : "home_outline", href : "/"},
    {label : "Stats",icon : "query_stats", href : "dashboard"},
    {label : "Create",icon : "add_circle", href : "create"},
    {label : "Orders",icon : "receipt_long", href : "orders"},
    {label : "Account",icon : "account_circle", href : "profile"}]
}
