import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lista1: string[];
  lista2: string[];
  lista3: string[];
  lista4: string[];
 constructor() { }

  ngOnInit() {
    /*lista do rodapé */
    this.lista1 = ['Quem somos', 'Pacotes', 'Termos', 'Pacotes', 'Suporte', 'Comentários', 'TicketPhone na mídia', 'Apoio a TickePhone'];
    this.lista2 = ['Checklista de tarefas', 'Lista de inscritos', 'Registro de presença e check-in', 'Contato de prestadores de serviços', 'Materias para dowloand', 'Certificados Digitais',
      'Canal da comunicação', 'Lojinha virtual' , 'Sorteios', 'Pesquisas', 'Contagem de público', 'Letreiro virtual'];
    this.lista3 = ['Vendas on-line e off-line', 'Vendas pelo site e aplicativos', 'Vendas as individuais e multiplas', 'Vendas com lugar marcado', 'Vendas de produtos e servições', 'Vendas de pacotes'];
    this.lista4 = ['TicketPhone web', 'Aplicativo Organizador', 'Aplicativo Participante', 'Maquininhas TicketPhone'];
 }
}
