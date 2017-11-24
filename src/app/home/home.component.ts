import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lista1: string[];
  lista2: string[];
  lista3: string[];
  lista4: string[];
  show = true;
  assustos = [];


  constructor() {
  }

  ngOnInit() {
    // lista do rodapé
    this.lista1 = ['Quem somos', 'Pacotes', 'Termos', 'Pacotes', 'Suporte', 'Comentários', 'TicketPhone na mídia', 'Apoio a TickePhone'];
    this.lista2 = ['Checklista de tarefas', 'Lista de inscritos', 'Registro de presença e check-in', 'Contato de prestadores de serviços', 'Materias para dowloand', 'Certificados Digitais',
      'Canal da comunicação', 'Lojinha virtual', 'Sorteios', 'Pesquisas', 'Contagem de público', 'Letreiro virtual'];
    this.lista3 = ['Vendas on-line e off-line', 'Vendas pelo site e aplicativos', 'Vendas as individuais e multiplas', 'Vendas com lugar marcado', 'Vendas de produtos e servições', 'Vendas de pacotes'];
    this.lista4 = ['TicketPhone web', 'Aplicativo Organizador', 'Aplicativo Participante', 'Maquininhas TicketPhone'];
    // select lista
    this.assustos = [
      {name: 'Selecione um assunto'},
      {name: 'Ingressos'},
      {name: 'Certificados'},
      {name: 'Aplicativos'},
      {name: 'Acesso a eventos'},
      {name: 'Serviços'},
      {name: 'Pacotes de serviços'},
      {name: 'Outros'},
    ];

    $("#mensagem .header").on("click", function(){
      $("#mensagem .conteudo").slideToggle();
    });



  }

  Mostra() {
    this.show = !this.show;
}


}
