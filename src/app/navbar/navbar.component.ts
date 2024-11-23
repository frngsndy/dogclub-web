import { Component, computed, input, signal } from '@angular/core';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  title = input('');
  select = input(1);
  faPaw = faPaw;
  menus = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/flow', name: 'Flow' },
  ]
  ngOnInit() { }

  onSelect(id: number) {
    // this.select = id;
    const result = computed(() => this.select());
  }
}
