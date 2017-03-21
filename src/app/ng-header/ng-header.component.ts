import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ng-header-compoonent',
  templateUrl: 'ng-header.component.html',
  styleUrls: ['ng-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
