import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<LoadingComponent>) {}

    ngOnInit(){}

    hide(): void {
        this.dialogRef.close();
    }
}
