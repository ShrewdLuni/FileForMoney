import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { OrderComponent } from "../../shared/components/order/order.component";

@Component({
    selector: 'app-orders',
    standalone: true,
    templateUrl: './orders.component.html',
    imports: [NavbarComponent, OrderComponent]
})


export class OrdersComponent {
    orders = [
        {preview: "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",label:"Name",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien quis aliquam pretium. Nunc vestibulum massa ornare lobortis tempor. Proin tincidunt blandit imperdiet. Suspendisse et condimentum tellus.",price:"19.99"},
        {preview: "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",label:"Name",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien quis aliquam pretium. Nunc vestibulum massa ornare lobortis tempor. Proin tincidunt blandit imperdiet. Suspendisse et condimentum tellus.",price:"19.99"},
        {preview: "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",label:"Name",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien quis aliquam pretium. Nunc vestibulum massa ornare lobortis tempor. Proin tincidunt blandit imperdiet. Suspendisse et condimentum tellus.",price:"19.99"},
        {preview: "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",label:"Name",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien quis aliquam pretium. Nunc vestibulum massa ornare lobortis tempor. Proin tincidunt blandit imperdiet. Suspendisse et condimentum tellus.",price:"19.99"},
        {preview: "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",label:"Name",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien quis aliquam pretium. Nunc vestibulum massa ornare lobortis tempor. Proin tincidunt blandit imperdiet. Suspendisse et condimentum tellus.",price:"19.99"},
    ]
}
