import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DinoComponent } from './dino.component';

describe('DinoComponent', () => {
  let component: DinoComponent;
  let fixture: ComponentFixture<DinoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
