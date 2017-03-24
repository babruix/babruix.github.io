import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-ng-social',
  templateUrl: 'ng-social.component.html',
  styleUrls: ['ng-social.component.scss', '/bootstrap-social.css']
})
export class NgsocialComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit(): void {
    this.socialAnimate()
    this.logoAnimate(300)
  }

  private logoAnimate(timeout: number): void {
    timeout = timeout || 300;
    $('#l-logo').hide()
    setTimeout(() => {
      //rollIn effect is also cool )
      $('#l-logo').addClass('lightSpeedIn animated').show()
    }, timeout)
  }

  private socialAnimate():void {
    const $socialIcons = $('app-ng-social a');
    $socialIcons.hide()
    $socialIcons.each((i, el) => {
      setTimeout(() => {
        $(el).addClass('bounceIn animated')
      }, 50 * i)
    })
    $socialIcons.show()
  }

}
