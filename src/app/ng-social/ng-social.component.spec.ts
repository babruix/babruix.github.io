/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgsocialComponent } from './ng-social.component';

describe('NgsocialComponent', () => {
  let component: NgsocialComponent;
  let fixture: ComponentFixture<NgsocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgsocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgsocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
