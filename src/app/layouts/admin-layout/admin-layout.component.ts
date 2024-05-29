import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  standalone: true,
  imports: [SidebarComponent,RouterModule, NavbarComponent],
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {
  isSideNavOpen: boolean = true;
}
