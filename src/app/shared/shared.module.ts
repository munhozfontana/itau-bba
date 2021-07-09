import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ContentBodyComponent } from './components/contents/content-body/content-body.component';
import { LoadingComponent } from './components/contents/loading/loading.component';
import { LoadingService } from './components/contents/loading/loading.service';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { CustomMatPaginatorIntlService } from './services/custom-mat-paginator-intl.service';

@NgModule({
  declarations: [
    HeaderComponent,
    TitleComponent,
    ContentBodyComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    TitleComponent,
    ContentBodyComponent,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    LoadingComponent,
    MatIconModule,
    RouterModule,
  ],
  providers: [
    LoadingService,
    {
      provide: MatPaginatorIntl,
      useClass: CustomMatPaginatorIntlService,
    },
  ],
})
export class SharedModule {}
