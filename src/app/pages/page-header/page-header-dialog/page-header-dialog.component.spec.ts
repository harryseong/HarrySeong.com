import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageHeaderDialogComponent } from './page-header-dialog.component';

describe('PageHeaderDialogComponent', () => {
  let component: PageHeaderDialogComponent;
  let fixture: ComponentFixture<PageHeaderDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
