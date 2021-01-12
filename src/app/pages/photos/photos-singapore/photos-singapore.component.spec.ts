import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhotosSingaporeComponent } from './photos-singapore.component';

describe('PhotosSingaporeComponent', () => {
  let component: PhotosSingaporeComponent;
  let fixture: ComponentFixture<PhotosSingaporeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosSingaporeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosSingaporeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
