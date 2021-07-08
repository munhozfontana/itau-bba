import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ContentBodyComponent } from './components/contents/content-body/content-body.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [HeaderComponent, TitleComponent, ContentBodyComponent],
  imports: [CommonModule, MatDividerModule, MatIconModule],
  exports: [HeaderComponent, TitleComponent, ContentBodyComponent],
})
export class SharedModule {}