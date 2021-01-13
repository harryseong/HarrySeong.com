import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhotosChicagoComponent } from './photos-chicago.component';

describe('PhotosChicagoComponent', () => {
  let component: PhotosChicagoComponent;
  let fixture: ComponentFixture<PhotosChicagoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosChicagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosChicagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
