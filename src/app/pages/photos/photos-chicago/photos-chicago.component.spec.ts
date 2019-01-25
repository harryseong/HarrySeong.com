import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosChicagoComponent } from './photos-chicago.component';

describe('PhotosChicagoComponent', () => {
  let component: PhotosChicagoComponent;
  let fixture: ComponentFixture<PhotosChicagoComponent>;

  beforeEach(async(() => {
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
