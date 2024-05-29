import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/admin/dashboard/dashboard.component';
import { ServicesComponent } from '../../pages/admin/services/services.component';
import { AdminLayoutComponent } from './admin-layout.component';

export const AdminLayoutRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  providers: [
  ],
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'services',
      component: ServicesComponent
    }
  ]
}
];
