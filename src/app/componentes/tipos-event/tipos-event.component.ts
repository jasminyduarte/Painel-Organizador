import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatTabGroup } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
    selector: 'app-tipos-event',
    templateUrl: './tipos-event.component.html',
    styleUrls: ['./tipos-event.component.css']
})
export class TiposEventComponent implements OnInit {
    dialog: any;
    show = true;

    @Output("duvidas") emitter = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }
    openDialog(): void {
        let dialogRef = this.dialog.open(DialogComponent, {
            width: '80%'
        });
    }

    toggleLogin() {
        this.show = !this.show;
    }

    abrirModal() {
        this.emitter.emit();
    }

}
