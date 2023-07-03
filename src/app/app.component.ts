import {Component, OnInit} from '@angular/core';
import {timer} from "rxjs";
import {TestAComponent} from "./components/test-a/test-a.component";
import {TestBComponent} from "./components/test-b/test-b.component";
import {BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'NgxBoostrap-BsModalService';

  constructor(private bsModalService: BsModalService) {}

  ngOnInit() {
    timer(1000).subscribe(() => {
      this.bsModalService.show(TestAComponent, {
        backdrop: true,
        ignoreBackdropClick: true
      }).
        content!.onCustomHide.subscribe(() => {
        this.bsModalService.show(TestBComponent,{
          backdrop: true,
          ignoreBackdropClick: true
        })
      })
    })
  }
}

