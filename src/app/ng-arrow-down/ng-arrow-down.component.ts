import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-ng-arrow-down',
  templateUrl: './ng-arrow-down.component.html',
  styleUrls: ['ng-arrow-down.component.scss']
})
export class NgArrowDownComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit(): void {

    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $('#down-arrow').hide()
      } else {
        $('#down-arrow').show()
      }
    })
  }

  scrollToServices(): void {
    $('html, body').animate({
      scrollTop: $('#l-services').offset().top -60
    }, 1000, 'easeInOutExpo')
  }

}
