import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-ng-arrow-down',
  templateUrl: './ng-arrow-down.component.html',
  styleUrls: ['ng-arrow-down.component.scss']
})
export class NgArrowDownComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit(): void {

    const topVal = ($(window).width() < 769) ? 0 : 58
    $('#down-arrow').click(function(event) {
      var section = $(this).data('nav-section')

        $('html, body').animate({
          scrollTop: $('#l-project').offset().top - topVal
        }, 1000, 'easeInOutExpo')
      event.preventDefault();
    });

    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $('#down-arrow').hide()
      } else {
        $('#down-arrow').show()
      }
    })
  }



}
