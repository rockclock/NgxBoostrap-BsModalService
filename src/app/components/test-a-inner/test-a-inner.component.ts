import {Component, EventEmitter, Output} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-test-a-inner',
  templateUrl: './test-a-inner.component.html',
  styleUrls: ['./test-a-inner.component.sass']
})
export class TestAInnerComponent {

  @Output() onHide = new EventEmitter()

  constructor(private bsModalRef: BsModalRef) { }

  handleClick () {
    this.bsModalRef.hide()
    this.onHide.emit()
  }
}
