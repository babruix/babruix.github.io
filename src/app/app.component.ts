import { Component, trigger, transition, style, animate} from '@angular/core';

declare var Waypoint: any;
declare var jQuery: any;
var $:any = jQuery;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[
    require('animate.css'),
    require('icomoon-free-npm/Font/demo-files/demo.css'),
    require('./app.component.css')
  ],
  animations: [
    trigger('fadeInOut', [
      transition('void => *', [
        style({opacity:0}), //style only for transition transition (after transiton it removes)
        animate(500, style({opacity:1})) // the new state of the transition(after transiton it removes)
      ]),
      transition('* => void', [
        animate(500, style({opacity:0})) // the new state of the transition(after transiton it removes)
      ])
    ])
  ]
})
export class AppComponent {

  title = 'Open Sans';
  loadCompleted = false;

  ngOnInit() {
    this.loadCompleted = true;

    var contentWayPoints = function() {

      $('.animate-box').each(function() {

        var waypoint = new Waypoint({
          element: $(this),
          handler: function(direction) {

            if( direction === 'down' && !$(this.element).hasClass('animated') ) {

              $(this.element).addClass('item-animate');

              setTimeout(function() {

                $('body .animate-box.item-animate').each(function(k) {
                  var el = $(this);
                  setTimeout( function () {
                    var effect = el.data('animate-effect');
                    if ( effect === 'fadeIn') {
                      el.addClass('fadeIn animated');
                    } else if ( effect === 'fadeInLeft') {
                      el.addClass('fadeInLeft animated');
                    } else if ( effect === 'fadeInRight') {
                      el.addClass('fadeInRight animated');
                    } else {
                      el.addClass('fadeInUp animated');
                    }

                    el.removeClass('item-animate');
                  },  k * 50, 'easeInOutExpo' );
                });

              }, 100);
            }
          },
          offset: '85%'
        })
      });


    };

    setTimeout(()=> contentWayPoints(), 0)
  }
}
