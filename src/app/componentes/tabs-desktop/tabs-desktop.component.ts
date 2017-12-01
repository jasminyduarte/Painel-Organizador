import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTabGroup} from '@angular/material';

@Component({
  selector: 'app-tabs-desktop',
  templateUrl: './tabs-desktop.component.html',
  styleUrls: ['./tabs-desktop.component.css']
})
export class TabsDesktopComponent implements OnInit {
  ///////////////////////////////////////
  // PEGAR OBJETO MATGROUP DO TEMPLATE //
  ///////////////////////////////////////
  @ViewChild(MatTabGroup) grupoPlataformas: MatTabGroup;

  constructor() { }

  ngOnInit() {
    /////////////////////////////////////////////////////////
    // FORCAR TAB GRUPOS PLATAFORMA COMECAR NO SEGUNDO TAB //
    /////////////////////////////////////////////////////////
    this.grupoPlataformas.selectedIndex = 1;
  }

}
