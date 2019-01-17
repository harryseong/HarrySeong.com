import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderDialogComponent } from './page-header-dialog.component';

describe('PageHeaderDialogComponent', () => {
  let component: PageHeaderDialogComponent;
  let fixture: ComponentFixture<PageHeaderDialogComponent>;

  beforeEach(async(() => {
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
