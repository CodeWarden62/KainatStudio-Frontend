import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/public/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.scss'
})
export class PublicLayoutComponent {

}
