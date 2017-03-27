import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-skills-compoonent',
  templateUrl: 'ng-skills.component.html',
  styleUrls: ['ng-skills.component.scss']
})
export class NgSkillsComponent implements OnInit {


  skillsItems = [
    {'heading': 'Java', 'image': 'java', 'text': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', 'link': '#'},
    {'heading': 'Angular', 'image': 'angular', 'text': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', 'link': '#'},
    {'heading': 'Drupal', 'image': 'drupal', 'text': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', 'link': '#'},
    {'heading': 'Node.js', 'image': 'node', 'text': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', 'link': '#'},
    {'heading': 'Typescript', 'image': 'typescript', 'text': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', 'link': '#'},
    {'heading': 'React.js', 'image': 'reactjs', 'text': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', 'link': '#'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
