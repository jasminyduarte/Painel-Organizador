import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { FormValidacao } from '../../form-validacao';
import { WebserviceTicketPhone } from '../../webservice';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.css']
})
export class CardLoginComponent implements OnInit {
 esconde = false;
 mostra = true;
 closse = false;
 login: string[];
 registro: string[]
  voltar: string ="Esqueceu a senha ?";

  formLogin;
  formCadastro;
  formDados;
  formSenha;

  constructor(
    private _webservice: WebserviceTicketPhone,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(){
    // FORMULARIO LOGIN
    this.formLogin = this._formBuilder.group({
      cpfCtrl: ['', [Validators.required, FormValidacao.cpf]],
      senhaCtrl: ['', Validators.required]
    });

    // FORMULARIO CADASTRO
    this.formCadastro = this._formBuilder.group({
      nomeCtrl: ['', Validators.required],
      cpfCtrl: ['', [Validators.required, FormValidacao.cpf]],
      emailCtrl: ['', [Validators.required, FormValidacao.email]],
      confemailCtrl: ['', [Validators.required, FormValidacao.email, FormValidacao.confirm]],
      senhaCtrl: ['', Validators.required],
      confsenhaCtrl: ['', [Validators.required, FormValidacao.confirm]]
    });

    // FORMULARIO DADOS
    this.formDados = this._formBuilder.group({
      nomeCtrl: ['', Validators.required],
      empresaCtrl: ['', Validators.required],
      segmentoCtrl: ['', Validators.required],
      emailCtrl: ['', [Validators.required, FormValidacao.email]],
      telefoneCtrl: ['', Validators.required],
      interesseCtrl: ['', Validators.required],
      estadoCtrl: ['', Validators.required],
      cidadeCtrl: ['', Validators.required]
    });

    // FORMULARIO ESQUECI SENHA
    this.formSenha = this._formBuilder.group({
      cpfCtrl: ['', [Validators.required, FormValidacao.cpf]]
    });
  }

  ngAfterViewInit() {
    var $loginMsg = $('.loginMsg'),
      $login = $('.login'),
      $signupMsg = $('.signupMsg'),
      $signup = $('.signup'),
      $frontbox = $('.frontbox');

    $('#switch1').on('click', function() {
      $loginMsg.toggleClass("visibility");
      $frontbox.addClass("moving");
      $frontbox.addClass("frontbox2");
      $signupMsg.toggleClass("visibility");

      $signup.toggleClass('hide');
      $login.toggleClass('hide');
      console.log("teste");
    });

    $('#switch2').on('click', function() {
      $loginMsg.toggleClass("visibility");
      $frontbox.removeClass("moving");
      $frontbox.removeClass("frontbox2");
      $signupMsg.toggleClass("visibility");

      $signup.toggleClass('hide');
      $login.toggleClass('hide');
    });

    // setTimeout(function(){
    //   $('#switch1').click();
    // },1000);
    //
    // setTimeout(function(){
    //   $('#switch2').click();
    // },3000);
  }

  // FAZER LOGIN
  submitLogin() {
    const form = this.formLogin.value;
    const cpf = form.cpfCtrl;
    const senha = form.senhaCtrl;

    this._webservice.loginOrganizador(cpf, senha)
    .subscribe(resposta => {
      console.log(resposta);

      let autenticado = '';
      if(resposta[0] && resposta[0]['Status']) {
        autenticado = resposta[0]['Status'].toLowerCase();
      } else if(resposta[0] && resposta[0]['Autenticacao']) {
        autenticado = resposta[0]['Autenticacao'].toLowerCase();
      }

      if(autenticado === 'true') {
        const url = 'https://app.ticketphone.com.br/webrun/logon.do?sys=EVN'
          + '&user=' + encodeURI(cpf)
          + '&password=' + encodeURI(senha);
        window.location.href = url;
      } else if (autenticado === "naocadastrado") {
        console.log("Este CPF não está cadastrado, faça o seu cadastro!");
      } else if (autenticado === "cadastrado") {
        console.log("Senha incorreta");
      } else {
        console.log("acesso negado");
      }
    }, erro => {
      console.log('Parece que alguma coisa deu errado :(<br/>Por favor, tente novamente em alguns instantes!');
      console.log(erro);
    });
  }

  // FAZER CADASTRO (NAO ESTA FUNCIONANDO)
  submitCadastro() {
    const form = this.formCadastro.value;
    const nome = form.nomeCtrl;
    const cpf = form.cpfCtrl;
    const email = form.emailCtrl;
    const senha = form.senhaCtrl;

    this._webservice.cadastroOrganizador(nome, cpf, email, senha)
    .subscribe(resposta => {
      console.log(resposta);
      const autenticado = resposta && resposta.toLowerCase().trim() === 'true' ? true : false;
      if (autenticado) {
        console.log('Cadastro realizado com sucesso, redirecionando para o dashboard!');
        setTimeout(function () {
          const url = 'https://app.ticketphone.com.br/webrun/logon.do?sys=EVN'
            + '&user=' + encodeURI(cpf)
            + '&password=' + encodeURI(senha);
          window.location.href = url;
        }, 1500);
      } else {
        console.log('Parece que alguma coisa deu errado :(<br/>Por favor, tente novamente em alguns instantes!');
      }
    }, erro => {
      console.log('Parece que alguma coisa deu errado :(<br/>Por favor, tente novamente em alguns instantes!');
      console.log(erro);
    });
  }

  // ENVIAR MENSAGEM
  submitDados() {
    const form = this.formDados.value;
    const nome = form.nomeCtrl;
    const empresa = form.empresaCtrl;
    const segmento = form.segmentoCtrl;
    const email = form.emailCtrl;
    const telefone = form.telefoneCtrl;
    const interesse = form.interesseCtrl;
    const estado = form.estadoCtrl;
    const cidade = form.cidadeCtrl;

    this._webservice.enviarMensagem(
      '01178662292',
      '1234',
      210,
      1,
      JSON.stringify({
        nome: nome,
        empresa: empresa,
        segmento: segmento,
        email: email,
        tel: telefone,
        interesse: interesse,
        estado: estado,
        cidade: cidade
      }),
      'Org'
    )
      .subscribe(resposta => {
        console.log(resposta);

        if (resposta && resposta.toString().toLowerCase().trim() !== "false") {
          const res = resposta['status'].toLocaleLowerCase().trim() === 'true' ? true : false;
          if (res) {
            console.log("Mensagem enviada com sucesso!");
            console.log("Apagar campos do formulario.");
          } else {
            console.log('Parece que alguma coisa deu errado :(<br/>Por favor, tente novamente em alguns instantes!');
          }
        } else {
          console.log('Parece que alguma coisa deu errado :(<br/>Por favor, tente novamente em alguns instantes!');
        }
      }, erro => {
        console.log('Parece que alguma coisa deu errado :(<br/>Por favor, tente novamente em alguns instantes!');
        console.log(erro);
      })
  }

  // NOVA SENHA
  esqueciSenha() {
    const form = this.formSenha.value;
    const cpf = form.cpfCtrl;

    this._webservice.novaSenha(cpf)
      .subscribe(resposta => {
        console.log(resposta);
      }, erro => {
        console.log(erro);
      })
  }

  // VERIFICAR VALIDACAO
  hasErro(form: FormGroup, control: string, erro: string) {
    const ctrl = form.controls[control];
    return (ctrl.touched || ctrl.dirty) && ctrl.hasError(erro);
  }

  RecuperaSenha(){
    this.esconde = !this.esconde;
    this.mostra = !this.mostra;
    this.voltar = this.mostra ? "Esqueceu a senha ?":"Deseja voltar ?";
  }

  loginclosse(){
    console.log("entrou")
    this.closse= !this.closse;
  }
}
