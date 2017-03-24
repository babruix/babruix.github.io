import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-ng-social',
  templateUrl: 'ng-social.component.html',
  styleUrls: ['ng-social.component.scss', '/bootstrap-social.css']
})
export class NgsocialComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit(): void {

    const $socialIcons = $('app-ng-social a');
    $socialIcons.hide()
    $socialIcons.each((i, el) => {
      setTimeout(() => {
        $(el).addClass('bounceIn animated')
        }, 50 * i)
    })
    $socialIcons.show()

    $('#l-logo').hide()
    setTimeout(() => {
      $('#l-logo').addClass('lightSpeedIn animated').show()
    }, 500)
  }

}
