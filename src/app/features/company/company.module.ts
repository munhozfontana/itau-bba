import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyRoutingModule } from './company-routing.module';

@NgModule({
  imports: [CommonModule, CompanyRoutingModule, SharedModule],
  declarations: [CompanyListComponent, CompanyDetailComponent],
})
export class CompanyModule {}
