import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-page-header-dialog',
  templateUrl: './page-header-dialog.component.html',
  styleUrls: ['./page-header-dialog.component.css']
})
export class PageHeaderDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PageHeaderDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
