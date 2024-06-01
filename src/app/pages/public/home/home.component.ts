import { Component } from '@angular/core';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleryCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
