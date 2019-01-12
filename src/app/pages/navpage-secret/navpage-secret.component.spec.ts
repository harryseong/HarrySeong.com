import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavpageSecretComponent } from './navpage-secret.component';

describe('NavpageSecretComponent', () => {
  let component: NavpageSecretComponent;
  let fixture: ComponentFixture<NavpageSecretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavpageSecretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavpageSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
