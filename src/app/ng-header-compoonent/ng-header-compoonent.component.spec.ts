/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgHeaderCompoonentComponent } from './ng-header-compoonent.component';

describe('NgHeaderCompoonentComponent', () => {
  let component: NgHeaderCompoonentComponent;
  let fixture: ComponentFixture<NgHeaderCompoonentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgHeaderCompoonentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgHeaderCompoonentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
