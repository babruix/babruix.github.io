import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-skills-compoonent',
  templateUrl: 'ng-skills.component.html',
  styleUrls: ['ng-skills.component.scss']
})
export class NgSkillsComponent implements OnInit {


  skillsItems = [
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
