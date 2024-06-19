import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'navbar-item',
  standalone: true,
  templateUrl: './navItem.component.html',
  imports: [MatIconModule]
})
export class NavItemComponent {
  @Input() label = "home"
  @Input() icon = "home"
  @Input() href = "/"
}
