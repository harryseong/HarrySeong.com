import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosMinnesotaComponent } from './photos-minnesota.component';

describe('PhotosMinnesotaComponent', () => {
  let component: PhotosMinnesotaComponent;
  let fixture: ComponentFixture<PhotosMinnesotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosMinnesotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosMinnesotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
