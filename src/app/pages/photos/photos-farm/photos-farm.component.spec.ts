import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosFarmComponent } from './photos-farm.component';

describe('PhotosFarmComponent', () => {
  let component: PhotosFarmComponent;
  let fixture: ComponentFixture<PhotosFarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosFarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
