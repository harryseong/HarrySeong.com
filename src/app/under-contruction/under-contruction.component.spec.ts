import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UnderContructionComponent } from './under-contruction.component';

describe('UnderContructionComponent', () => {
  let component: UnderContructionComponent;
  let fixture: ComponentFixture<UnderContructionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderContructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderContructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
