import {Component, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {PageHeaderDialogComponent} from './page-header-dialog/page-header-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
  animations: [
    trigger('headerAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-0.5em)'}),
        animate('2s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('backAnimations', [
      transition(':enter', [
        style({ transform: 'translateX(4em)'}),
        animate('0.75s ease', style({ transform: 'translateX(0)' })),
      ]),
    ])
  ]
})
export class PageHeaderComponent implements OnInit {
  @Input() pageHeader: string;
  @Input() pageSubheader: string;
  @Input() pageExplanation: string;
  @Input() pageTech: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  // Open dialog with instructions when user clicks on the "Need to unsubscribe from a list?" link in the footer.
  openDialog(): void {
    const dialogRef = this.dialog.open(PageHeaderDialogComponent, {
      width: '40em',
      autoFocus: false,
      data: {
        header: this.pageHeader,
        explanation: this.pageExplanation,
        tech: this.pageTech
      },
      panelClass: 'page-info-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
