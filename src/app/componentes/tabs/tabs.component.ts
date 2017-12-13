import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  show = true;
  constructor() { }

  ngOnInit() {
  }
  Mostra() {
    console.log("mostra")
    this.show = !this.show;
  }
}
