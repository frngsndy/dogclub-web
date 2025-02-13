import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import packageJson from '../../../../../../package.json';
import { MenuService } from '../../services/menu.service';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass, NgIf, SidebarMenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  public appJson: any = packageJson;

  constructor(public menuService: MenuService) { }

  ngOnInit(): void { }

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }
}
