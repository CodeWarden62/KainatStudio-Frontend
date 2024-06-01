import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './public-layout.component';
import { HomeComponent } from '../../pages/public/home/home.component';
export const PublicLayoutRoutes: Routes = [{
  path: '',
  component: PublicLayoutComponent,
  providers: [
  ],
  children: [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
  ]
}
];
