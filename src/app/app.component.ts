import {Component, trigger, transition, style, animate, AfterViewInit, OnInit, ViewEncapsulation} from '@angular/core'
declare var Waypoint: any
declare var jQuery: any
var $:any = jQuery

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[
    require('animate.css'),
    require('./app.component.scss')
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
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit, OnInit {

  loadCompleted: boolean = false

  ngOnInit() {
    this.loadCompleted = true
  }

  ngAfterViewInit() {

    this.scrollNavBar()
    this.burgerMenu()
    this.contentWayPoints()
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

}
