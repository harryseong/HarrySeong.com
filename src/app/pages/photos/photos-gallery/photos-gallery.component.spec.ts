import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhotosGalleryComponent } from './photos-gallery.component';

describe('PhotosGalleryComponent', () => {
  let component: PhotosGalleryComponent;
  let fixture: ComponentFixture<PhotosGalleryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
