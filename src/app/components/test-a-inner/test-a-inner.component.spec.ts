import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAInnerComponent } from './test-a-inner.component';

describe('TestAInnerComponent', () => {
  let component: TestAInnerComponent;
  let fixture: ComponentFixture<TestAInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAInnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestAInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
