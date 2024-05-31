import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/admin/dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { ServicesViewComponent } from '../../pages/admin/services-pages/services-view/services-view.component';
import { ServicesFormComponent } from '../../pages/admin/services-pages/services-form/services-form.component';

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
      component: ServicesViewComponent
    },
    {
      path: 'services/new',
      component: ServicesFormComponent
    },
    // edit service requires an id
    {
      path: 'services/edit/:id',
      component: ServicesFormComponent
    }
  ]
}
];
