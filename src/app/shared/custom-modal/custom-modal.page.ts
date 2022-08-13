import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.page.html',
  styleUrls: ['./custom-modal.page.scss'],
})
export class CustomModalPage implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CustomModalPage>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}
  // eslint-disable-next-line @typescript-eslint/member-ordering
  type: string;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  title: string;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  text: string;

  ngOnInit() {
    this.setData();
  }

  setData() {
    this.type = this.data.type;
    this.title = this.data.title;
    this.text = this.data.text;
  }
  back() {}
  close() {
    this.dialogRef.close();
  }
}
