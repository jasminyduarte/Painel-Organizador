import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import Swiper from 'swiper';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    $(document).ready(function () {
      const mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        // autoplay: {
        //   delay: 5000,
        // }
      });
    });
  }

}
