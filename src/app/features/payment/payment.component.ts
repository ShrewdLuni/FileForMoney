import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  standalone: true,
  templateUrl: './payment.component.html',
})
export class PaymentComponent {
  name = "Name";
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien quis aliquam pretium. Nunc vestibulum massa ornare lobortis tempor. Proin tincidunt blandit imperdiet. Suspendisse et condimentum tellus. ";
  previewSrc = "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg";
  price = 19.99;
  downloadLimit = 9999;
}
