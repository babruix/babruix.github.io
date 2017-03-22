/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgGotoTopComponent } from './ng-goto-top.component';

describe('NgGotoTopComponent', () => {
  let component: NgGotoTopComponent;
  let fixture: ComponentFixture<NgGotoTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGotoTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGotoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
