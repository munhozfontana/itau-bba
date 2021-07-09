import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.sass'],
})
export class ContentBodyComponent {
  @Input() title: String = 'Titulo';
  @Input() subTitle: String = 'sub titulo';
  @Input() search: boolean = false;
  @Output() ngModelChange = new EventEmitter<String>();

  searchFromControl = new FormControl('');

  changeText(event: String) {
    this.ngModelChange.emit(event);
  }
}
