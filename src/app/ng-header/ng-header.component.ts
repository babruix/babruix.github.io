import {Component, OnInit, ViewEncapsulation, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-ng-header-compoonent',
  templateUrl: 'ng-header.component.html',
  styleUrls: ['ng-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgHeaderComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const topVal = ($(window).width() < 769) ? 0 : 58

    $('.l-nav a, #l-offcanvas a').click(function(event) {
      const section = $(this).data('nav-to')

      if ($('#l-' + section + '').length) {
        $('html, body').animate({
          scrollTop: $('#l-' + section + '').offset().top //- topVal
        }, 500, 'easeInOutExpo')
      }
      event.preventDefault()
    });

  }



}
