import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-ng-projects-compoonent',
  templateUrl: 'ng-projects.component.html',
  styleUrls: ['ng-projects.component.scss']
})
export class NgProjectsComponent   {

  projectsItems = [
    {'imageUrl': 'assets/images/work-1.jpg', 'heading': 'Clipboard Office', 'category': 'Web Design'},
    {'imageUrl': 'assets/images/work-2.jpg', 'heading': 'Smart Layers', 'category': 'Brand & Identity'},
    {'imageUrl': 'assets/images/work-3.jpg', 'heading': 'Notepad Mockup', 'category': 'Illustration'},
  ]

  constructor() { }

}
