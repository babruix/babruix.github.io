import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-skills-compoonent',
  templateUrl: 'ng-skills.component.html',
  styleUrls: ['ng-skills.component.scss']
})
export class NgSkillsComponent implements OnInit {


  skillsItems = [
    {
      'heading': 'Java',
      'image': 'java',
      'text': 'Java core, Spring, Hibernate, GWT, Play, Tomcat, JUnit',
      'link': '#'
    },
    {
      'heading': 'Angular',
      'image': 'angular',
      'text': 'AngularJS, Angular Cli, Router, Forms, Serives, Directives',
      'link': '#'
    },
    {
      'heading': 'Drupal',
      'image': 'drupal',
      'text': 'Over 7 years working with Drupal. Contributed to Drupal core.',
      'link': '#'
    },
    {
      'heading': 'Node.js',
      'image': 'node',
      'text': 'Express.js, Hapi.js, Meteor, Socket.io',
      'link': '#'
    },
    {
      'heading': 'Typescript',
      'image': 'typescript',
      'text': 'Declarations, modules , generics',
      'link': '#'
    },
    {
      'heading': 'React.js',
      'image': 'reactjs',
      'text': 'Create React App, JSX, RxJS, MobX',
      'link': '#'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
