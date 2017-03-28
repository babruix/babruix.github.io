import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-ng-projects-compoonent',
  templateUrl: 'ng-projects.component.html',
  styleUrls: ['ng-projects.component.scss']
})
export class NgProjectsComponent   {

  projectsItems = [
    {'imageUrl': 'assets/images/broadcastmedia.png', 'heading': 'Ericsson Broadcast and Media Services', 'category': 'Full Stack Developer'},
    {'imageUrl': 'assets/images/awave.png', 'heading': 'Awave AB', 'category': 'Technical Lead'},
    {'imageUrl': 'assets/images/ericsson.jpg', 'heading': 'Ericsson AB', 'category': 'Senior Backend Developer'},
  ]

  constructor() { }

}
