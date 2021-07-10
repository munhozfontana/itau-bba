import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { CepComponent } from './components/cep/cep.component';
import { ContentBodyComponent } from './components/contents/content-body/content-body.component';
import { LoadingComponent } from './components/contents/loading/loading.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { CustomMatPaginatorIntlService } from './services/custom-mat-paginator-intl.service';
import { LoadingInterceptorService } from './services/interceptors/loading/loading-interceptor.service';
import { ToastInterceptorService } from './services/interceptors/toast/toast-interceptor.service';
@NgModule({
  declarations: [
    HeaderComponent,
    TitleComponent,
    ContentBodyComponent,
    LoadingComponent,
    CepComponent,
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
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(),
    MatSelectModule,
    MatButtonModule,
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
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    CepComponent,
    NgxMaskModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ToastInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true,
    },
    {
      provide: MatPaginatorIntl,
      useClass: CustomMatPaginatorIntlService,
    },
  ],
})
export class SharedModule {}
