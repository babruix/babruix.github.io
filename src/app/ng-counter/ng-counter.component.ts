import {Component, OnInit, AfterViewInit} from '@angular/core';
var $:any = jQuery

@Component({
  selector: 'app-ng-counter',
  templateUrl: './ng-counter.component.html',
  styleUrls: ['ng-counter.component.scss']
})
export class NgCounterComponent implements AfterViewInit {

  counterItems = [
    {'icon': 'ti-download', 'range': [0, 12], 'text': 'years’ experience'},
    {'icon': 'ti-face-smile', 'range': [0, 20], 'text': 'Happy Clients'},
    {'icon': 'ti-briefcase', 'range': [0, 30], 'text': 'Projects Done'}
  ]

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
