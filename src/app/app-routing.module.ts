import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'company',
    loadChildren: () =>
      import('./features/company/company-routing.module').then(
        (m) => m.CompanyRoutingModule
      ),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: '', redirectTo: '/company', pathMatch: 'full' }, // redirect to `first-component`,
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
