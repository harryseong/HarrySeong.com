import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhotosHeaderComponent } from './photos-header.component';

describe('PhotosHeaderComponent', () => {
  let component: PhotosHeaderComponent;
  let fixture: ComponentFixture<PhotosHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
