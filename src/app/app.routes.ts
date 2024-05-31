import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin',
  loadChildren: () => import('./layouts/admin-layout/admin-layout.routing').then(m => m.AdminLayoutRoutes)
}
];
