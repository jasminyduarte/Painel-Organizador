import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTabGroup} from '@angular/material';

@Component({
  selector: 'app-ferramentas-desktop',
  templateUrl: './ferramentas-desktop.component.html',
  styleUrls: ['./ferramentas-desktop.component.css']
})
export class FerramentasDesktopComponent implements OnInit {
  index: number;
  ///////////////////////////////////////
  // PEGAR OBJETO MATGROUP DO TEMPLATE //
  ///////////////////////////////////////
  @ViewChild(MatTabGroup) grupoPlataformas: MatTabGroup;

  constructor() { }

  ngOnInit() {
    /////////////////////////////////////////////////////////
    // FORCAR TAB GRUPOS PLATAFORMA COMECAR NO SEGUNDO TAB //
    /////////////////////////////////////////////////////////
    this.grupoPlataformas.selectedIndex = this.index = 0;
  }

}
