/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgServicesCompoonentComponent } from './ng-services-compoonent.component';

describe('NgServicesCompoonentComponent', () => {
  let component: NgServicesCompoonentComponent;
  let fixture: ComponentFixture<NgServicesCompoonentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgServicesCompoonentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgServicesCompoonentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
