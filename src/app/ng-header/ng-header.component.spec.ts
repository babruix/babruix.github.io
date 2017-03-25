/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgsocialComponent } from '../ng-social/ng-social.component'

import { NgHeaderComponent } from './ng-header.component';

describe('NgHeaderComponent', () => {
  let component: NgHeaderComponent;
  let fixture: ComponentFixture<NgHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgHeaderComponent,
        NgsocialComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
