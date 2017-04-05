import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-ng-goto-top',
  templateUrl: './ng-goto-top.component.html',
  styleUrls: ['./ng-goto-top.component.scss']
})
export class NgGotoTopComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    this.goToTop()
  }

  goToTop() {

    $('.js-gotop').on('click', function(event) {

      event.preventDefault()

      $('html, body').animate({
        scrollTop: $('html').offset().top
      }, 500, 'easeInOutExpo')

      return false
    })

    $(window).scroll(function() {

      const $win = $(window)
      if ($win.scrollTop() > 200) {
        $('.js-top').addClass('active')
      } else {
        $('.js-top').removeClass('active')
      }
    })
  }

}
