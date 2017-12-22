import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'alerta',
    templateUrl: './alerta.component.html',
    styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

    titulo: string;
    mensagem: string;

    constructor(
        public dialogRef: MatDialogRef<AlertaComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.titulo = data.titulo || "Alerta";
        this.mensagem = data.mensagem || "";
    }

    ngOnInit(){}

    fecharAlerta(): void {
        this.dialogRef.close();
    }
}
