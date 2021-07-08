import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CompanyDetailComponent } from "./company-detail/company-detail.component";
import { CompanyListComponent } from "./company-list/company-list.component";
import { CompanyRoutingModule } from "./company-routing.module";


@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyDetailComponent,
  ],
  imports: [CommonModule, CompanyRoutingModule],
})
export class CompanyModule {}
