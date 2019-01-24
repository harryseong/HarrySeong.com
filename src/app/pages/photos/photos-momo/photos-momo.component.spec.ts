import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosMomoComponent } from './photos-momo.component';

describe('PhotosMomoComponent', () => {
  let component: PhotosMomoComponent;
  let fixture: ComponentFixture<PhotosMomoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosMomoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosMomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
