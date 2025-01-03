import { Component, input } from '@angular/core';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  title = input('');
  selected: number = 1;
  faPaw = faPaw;
  
  ngOnInit() { }

  onSelect(id: number) {
    this.selected = id;
  }
}
