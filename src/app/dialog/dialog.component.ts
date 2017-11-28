import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  step1;
  labelTextArea;

  question1 = [
    {value: 1, viewValue: 'Gostaria de uma consultoria sobre a minha atividade'},
    {value: 2, viewValue: 'Gostaria de solicitar uma ou mais maquininha TicketPhone'},
    {value: 3, viewValue: 'Gostaria do patrocínio TicketPhone'},
    {value: 4, viewValue: 'Estou com uma dúvida'},
    {value: 5, viewValue: 'Estou tendo um problema'},
    {value: 6, viewValue: 'Gostaria de solicitar uma ferramenta especial'},
    {value: 7, viewValue: 'Gostaria de apenas conversar'}
  ];
  perfil = [
    {value: '1', viewValue: 'Sou um(a) organizador(a) de eventos'},
    {value: '2', viewValue: 'Sou um(a) guia(a) turístico'},
    {value: '3', viewValue: 'Sou uma agência de viagens'},
    {value: '4', viewValue: 'Sou um(a) prestador(a) de serviço'},
    {value: '5', viewValue: 'Sou um(a) curioso(a)'}
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>, private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeLabelTextArea(): void {

      if (this.step1 == 1) {
        this.labelTextArea = 'Nos fale um pouco sobre sua ideia:';
      } else if (this.step1 == 2 || this.step1 == 4) {
        this.labelTextArea = 'Escreva sua mensagem:';
      } else if (this.step1 == 5) {
        this.labelTextArea = 'Me fale o que está acontecendo:';
      } else if (this.step1 == 6) {
        this.labelTextArea = 'Humm….. Me fale da sua atividade e qual é a sua ideia?';
      } else if (this.step1 == 7) {
        this.labelTextArea = 'Oie. Do que você gostaria de conversar?';
      }
  }
}
