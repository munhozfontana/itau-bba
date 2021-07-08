import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'company',
    loadChildren: () =>
      import('./features/company/company-routing.module').then(
        (m) => m.CompanyRoutingModule
      ),
  },
  { path: '', redirectTo: '/company', pathMatch: 'full' }, // redirect to `first-component`,
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
