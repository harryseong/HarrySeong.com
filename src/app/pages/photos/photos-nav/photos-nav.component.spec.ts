import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhotosNavComponent } from './photos-nav.component';

describe('PhotosNavComponent', () => {
  let component: PhotosNavComponent;
  let fixture: ComponentFixture<PhotosNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
