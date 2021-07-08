import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatDividerModule, MatIconModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
