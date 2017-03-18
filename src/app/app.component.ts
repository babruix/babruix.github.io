import {Component, trigger, transition, style, animate, AfterViewInit, OnInit} from '@angular/core'
declare var Waypoint: any
declare var jQuery: any
var $:any = jQuery

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[
    require('animate.css'),
    require('./app.component.css')
  ],
  animations: [
    trigger('fadeInOut', [
      transition('void => *', [
        style({opacity:0}),
        animate(500, style({opacity:1}))
      ]),
      transition('* => void', [
        animate(500, style({opacity:0}))
      ])
    ])
  ]
})
export class AppComponent implements AfterViewInit, OnInit {

  loadCompleted: boolean = false

  ngOnInit() {
    this.loadCompleted = true
  }

  ngAfterViewInit() {
    this.goToTop()
    this.offCanvasMenu()
    this.scrollNavBar()
    this.burgerMenu()
    this.contentWayPoints()
    this.counterWayPoint()
  }

  contentWayPoints() {

    $('.animate-box').waypoint(function (direction) {

          if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

            $(this.element).addClass('item-animate')

            setTimeout(function () {

              $('body .animate-box.item-animate').each(function (k) {
                const el = $(this)

                setTimeout(function () {

                  const effect = el.data('animate-effect')
                  if (effect === 'fadeIn') {
                    el.addClass('fadeIn animated-fast')
                  } else if (effect === 'fadeInLeft') {
                    el.addClass('fadeInLeft animated-fast')
                  } else if (effect === 'fadeInRight') {
                    el.addClass('fadeInRight animated-fast')
                  } else {
                    el.addClass('fadeInUp animated-fast')
                  }

                  el.removeClass('item-animate')
                }, k * 50, 'easeInOutExpo')
              })

            }, 100)
          }
      } , { offset: '85%' } )
  }

  scrollNavBar() {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $('#page').addClass('scrolled')
        $('.js-l-nav-toggle').removeClass('l-nav-white')
      } else {
        $('#page').removeClass('scrolled')
        $('.js-l-nav-toggle').addClass('l-nav-white')
      }
    })
    $(window).scroll()
  }

  offCanvasMenu() {

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

  burgerMenu() {

    $('#page').on('click', '.js-l-nav-toggle', function(event) {
      const $this = $(this)

      let $body = $('#page')
      if ($body.hasClass('overflow offcanvas') ) {
        $body.removeClass('overflow offcanvas')
      } else {
        $body.addClass('overflow offcanvas')
      }

      $this.toggleClass('active')
      event.preventDefault()
    })
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

  static counter() {
    $('.js-counter').countTo({
      formatter: function (value, options) {
        return value.toFixed(options.decimals)
      },
    })
  }

  counterWayPoint() {
    let $l = $('#l-counter');
    if (!$l.length) {
      return;
    }
    $l.waypoint( function( direction ) {
      if (direction === 'down' && !$(this.element).hasClass('animated') ) {
        setTimeout(AppComponent.counter , 400)
        $(this.element).addClass('animated')
      }
    } , { offset: '90%' } )
  }
}
