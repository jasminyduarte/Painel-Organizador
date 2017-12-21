import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WebserviceTicketPhone } from '../webservice';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

    isLinear = true;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    fourthFormGroup: FormGroup;
    responseStep = 'Aiii que legal. Não vemos a hora de fechar essa parceria. Em breve entraremos em contato com você. XD';
    responseSuccess = 'Sua mensagem foi enviada com sucesso!';

    step1;
    labelTextArea = '';

    question1 = [
        { value: 1, viewValue: 'Gostaria de uma consultoria sobre a minha atividade' },
        { value: 2, viewValue: 'Gostaria de solicitar uma ou mais maquininha TicketPhone' },
        { value: 3, viewValue: 'Gostaria do patrocínio TicketPhone' },
        { value: 4, viewValue: 'Estou com uma dúvida' },
        { value: 5, viewValue: 'Estou tendo um problema' },
        { value: 6, viewValue: 'Gostaria de solicitar uma ferramenta especial' },
        { value: 7, viewValue: 'Gostaria de apenas conversar' }
    ];
    perfil = [
        { value: '1', viewValue: 'Sou um(a) organizador(a) de eventos' },
        { value: '2', viewValue: 'Sou um(a) guia(a) turístico' },
        { value: '3', viewValue: 'Sou uma agência de viagens' },
        { value: '4', viewValue: 'Sou um(a) prestador(a) de serviço' },
        { value: '5', viewValue: 'Sou um(a) curioso(a)' }
    ];

    constructor(
        private _webservice: WebserviceTicketPhone,
        public dialogRef: MatDialogRef<DialogComponent>,
        private _formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    ngOnInit() {

        this.firstFormGroup = this._formBuilder.group({
            selCtrl: ['', Validators.required],
            perfilCtrl: ['', Validators.required]
        });

        this.secondFormGroup = this._formBuilder.group({
            nomeCtrl: ['', Validators.required],
            sobrenomeCtrl: ['', Validators.required],
            emailCtrl: ['', [Validators.required, Validators.email]],
            telCtrl: ['', Validators.required]
        });

        this.thirdFormGroup = this._formBuilder.group({
            nomeCtrl: ['', Validators.required],
            sobrenomeCtrl: ['', Validators.required],
            emailCtrl: ['', [Validators.required, Validators.email]],
            telCtrl: ['', Validators.required],
            empresaCtrl: ['', Validators.required],
            cidadeCtrl: ['', Validators.required]
        });

        this.fourthFormGroup = this._formBuilder.group({
            mensagemCtrl: ['', Validators.required]
        });

        console.log(this.firstFormGroup)
    }

    fecharModal(): void {
        this.dialogRef.close();
    }

    changeLabelTextArea(): void {
        if (this.step1.value === 1) {
            this.labelTextArea = 'Nos fale um pouco sobre sua ideia:';
            this.responseStep = 'Daqui a pouco entraremos em contato com você pra gente bater um papo e descobrir a melhor ' +
                'forma de criar a sua atividade. :D';
        } else if (this.step1.value === 2 || this.step1.value == 4) {
            this.labelTextArea = 'Escreva sua mensagem:';
            if (this.step1.value === 2) {
                this.responseStep = 'Aiii que legal. Não vemos a hora de fechar essa parceria. Em breve entraremos em contato com você. XD';
            }
            if (this.step1.value === 4) {
                this.responseStep = 'Então…. Logo logo vou retornar pra você explicando tudo direitinho, ok!? Obrigado pelo interesse' +
                    ' na nossa plataforma :)';
            }
        } else if (this.step1.value === 5) {
            this.labelTextArea = 'Me fale o que está acontecendo:';
            this.responseStep = 'Putz... Deixa eu ver o que esta acontecendo e eu vou retornar pra você o mais breve possível, ok!? \n' +
                'Obrigado por utilizar nossa plataforma :)';
        } else if (this.step1.value === 6) {
            this.labelTextArea = 'Humm... Me fale da sua atividade e qual é a sua ideia?';
            this.responseStep = 'Ficamos felizes em receber sua ideia e veremos o que podemos fazer por você. Assim, podemos melhorar e' +
                ' atender todas as suas necessidades no futuro. Obrigada pela colaboração.';
        } else if (this.step1.value === 7) {
            this.labelTextArea = 'Oie. Do que você gostaria de conversar?';
            this.responseStep = 'Daqui a pouco entraremos em contato com você pra gente bater um papo. :D';
        }
    }

    sendForm(): void {
        const firstGroup = this.firstFormGroup.value;
        const secondGroup = this.secondFormGroup.value;
        const thirdGroup = this.thirdFormGroup.value;
        const fourthGroup = this.fourthFormGroup.value;

        const tipo = firstGroup.selCtrl;
        const perfilUser = firstGroup.perfilCtrl;
        let nomeUser;
        let sobrenomeUser;
        let tel;
        let email;
        let empresa = '';
        let cidade = '';
        let mensagem = fourthGroup.mensagemCtrl;

        if (this.step1.value !== 2) {
            nomeUser = secondGroup.nomeCtrl;
            sobrenomeUser = secondGroup.sobrenomeCtrl;
            tel = secondGroup.telCtrl;
            email = secondGroup.emailCtrl;
        } else {
            nomeUser = thirdGroup.nomeCtrl;
            sobrenomeUser = thirdGroup.sobrenomeCtrl;
            tel = thirdGroup.telCtrl;
            email = thirdGroup.emailCtrl;
            empresa = thirdGroup.empresaCtrl;
            cidade = thirdGroup.cidadeCtrl;
        }

        this._webservice.enviarMensagem(
            '01178662292',
            '1234',
            'Org',
            210,
            JSON.stringify({
                nome: nomeUser,
                sobrenome: sobrenomeUser,
                empresa: empresa,
                email: email,
                interesse: perfilUser,
                tel: tel,
                cidade: cidade,
                mensagem: mensagem
            })
        ).subscribe(resposta => {
            // MESAGEM ENVIADA COM SUCESSO
            console.log(resposta);
        }, erro => {
            // ERRO AO ENVIAR
            console.log(erro);
        });
    }
}
