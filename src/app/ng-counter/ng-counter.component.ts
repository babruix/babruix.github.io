import {Component, OnInit, AfterViewInit} from '@angular/core';
declare var jQuery: any
var $:any = jQuery

@Component({
  selector: 'app-ng-counter',
  templateUrl: './ng-counter.component.html',
  styleUrls: ['ng-counter.component.scss']
})
export class NgCounterComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit(): void {

    this.counterWayPoint()
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
        setTimeout(NgCounterComponent.counter , 400)
        $(this.element).addClass('animated')
      }
    } , { offset: '90%' } )
  }
}
