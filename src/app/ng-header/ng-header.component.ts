import {Component, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {setTimeout} from "timers";
declare let $;

@Component({
  selector: 'app-ng-header-compoonent',
  templateUrl: 'ng-header.component.html',
  styleUrls: ['ng-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgHeaderComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {

    this.offCanvasMenu()

    this.handleMenuClick()

    this.animateNavMenu();
  }

  private animateNavMenu() {
    const $navMenu = $('nav .row ul');
    $navMenu.hide()
    setTimeout(() => $navMenu.addClass('slideInUp animated').show('fast'), 500)
  }

  private offCanvasMenu() {

    let $page = $('#page')
    $page.prepend('<div id="l-offcanvas" />')
    $page.prepend('<a href="#" class="js-l-nav-toggle l-nav-toggle l-nav-white"><i></i></a>')

    const clone1 = $('.menu-1 > ul').clone()
    let $l = $('#l-offcanvas')
    $l.append(clone1)

    const clone2 = $('.menu-2 > ul').clone()
    $l.append(clone2)

    $('#l-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown')
    $l
      .find('li')
      .removeClass('has-dropdown')

    // Hover dropdown menu on mobile
    $('.offcanvas-has-dropdown').mouseenter(function(){

      $(this)
        .addClass('active')
        .find('ul')
        .slideDown(500, 'easeOutExpo')
    }).mouseleave(function(){

      $(this)
        .removeClass('active')
        .find('ul')
        .slideUp(500, 'easeOutExpo')
    })

    $(window).resize(function(){
      let $body = $('#page')

      if ( $body.hasClass('offcanvas') ) {
        $body.removeClass('offcanvas')
        $('.js-l-nav-toggle').removeClass('active')
      }
    })
  }

  private handleMenuClick() {
    const topVal = ($(window).width() < 769) ? 0 : 58

    $('.l-nav ul li a, #l-offcanvas a').on('click', function (event) {
      const section = $(this).data('nav-to')

      const $sectionDiv = $('#l-' + section + '')
      if ($sectionDiv.length) {
        $('html, body').animate({
          scrollTop: $sectionDiv.offset().top - topVal
        }, 500, 'easeInOutExpo')
      }
      event.preventDefault()
    })
  }



}
