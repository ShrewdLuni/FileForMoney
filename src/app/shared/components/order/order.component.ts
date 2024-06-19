import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
})
export class OrderComponent {
  @Input() preview = "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg";
  @Input() label = "Name";
  @Input() description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien quis aliquam pretium. Nunc vestibulum massa ornare lobortis tempor. Proin tincidunt blandit imperdiet. Suspendisse et condimentum tellus. ";
  @Input() price = "19.99";
}
