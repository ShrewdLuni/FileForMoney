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
    {label : "Home",icon : "home"},
    {label : "Stats",icon : "monitoring"},
    {label : "Create",icon : "add_circle"},
    {label : "History",icon : "receipt_long"},
    {label : "Account",icon : "account_circle"}]
}
