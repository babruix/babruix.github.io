import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-services-compoonent',
  templateUrl: 'ng-services.component.html',
  styleUrls: ['ng-services.component.scss']
})
export class NgServicesComponent implements OnInit {


  servicesItems = [
    {'heading': 'Retina Ready', 'icon': 'icon-eye', 'text': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', 'link': '#'},
    {'heading': 'Fully Responsive', 'icon': 'icon-command', 'text': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', 'link': '#'},
    {'heading': 'Web Starter', 'icon': 'icon-power', 'text': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', 'link': '#'},
    {'heading': 'Retina Ready', 'icon': 'icon-eye', 'text': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', 'link': '#'},
    {'heading': 'Fully Responsive', 'icon': 'icon-command', 'text': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', 'link': '#'},
    {'heading': 'Web Starter', 'icon': 'icon-power', 'text': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', 'link': '#'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
