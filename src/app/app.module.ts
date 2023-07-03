import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestAComponent } from './components/test-a/test-a.component';
import { TestBComponent } from './components/test-b/test-b.component';
import { TestAInnerComponent } from './components/test-a-inner/test-a-inner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BsModalService, ModalModule } from "ngx-bootstrap/modal";

@NgModule({
  declarations: [
    AppComponent,
    TestAComponent,
    TestBComponent,
    TestAInnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
