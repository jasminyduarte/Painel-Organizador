import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.css']
})
export class CardLoginComponent implements OnInit {
 esconde = false;
 mostra = true;
 login: string[];
 registro: string[];
  constructor() { }

  ngOnInit() {
    var $loginMsg = $('.loginMsg'),
      $login = $('.login'),
      $signupMsg = $('.signupMsg'),
      $signup = $('.signup'),
      $frontbox = $('.frontbox');

    $('#switch1').on('click', function() {
      $loginMsg.toggleClass("visibility");
      $frontbox.addClass("moving");
      $signupMsg.toggleClass("visibility");

      $signup.toggleClass('hide');
      $login.toggleClass('hide');
    })

    $('#switch2').on('click', function() {
      $loginMsg.toggleClass("visibility");
      $frontbox.removeClass("moving");
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
  // RecuperaSenha(){
  //   this.esconde = !this.esconde;
  //   this.mostra = !this.mostra;
  // }

}
