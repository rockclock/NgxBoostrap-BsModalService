import {Component, EventEmitter, Output} from '@angular/core';
import {Subject} from "rxjs";
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-test-a',
  templateUrl: './test-a.component.html',
  styleUrls: ['./test-a.component.sass']
})
export class TestAComponent {

  // @Output() onCustomHide = new EventEmitter();
  onCustomHide = new Subject()
  constructor(private bsModalRef: BsModalRef) { }

  handleHide() {
    this.onCustomHide.next(1)
    this.bsModalRef.hide()
  }
}
