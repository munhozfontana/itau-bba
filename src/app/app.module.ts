import { registerLocaleData } from '@angular/common';
import br from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyModule } from './features/company/company.module';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './features/dashboad/dashboard/dashboard.component';

registerLocaleData(br, 'pt');
@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  exports: [CompanyModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
