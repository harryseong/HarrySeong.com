import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosSingaporeComponent } from './photos-singapore.component';

describe('PhotosSingaporeComponent', () => {
  let component: PhotosSingaporeComponent;
  let fixture: ComponentFixture<PhotosSingaporeComponent>;

  beforeEach(async(() => {
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
