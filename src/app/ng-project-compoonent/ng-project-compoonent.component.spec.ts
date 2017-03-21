/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgProjectCompoonentComponent } from './ng-project-compoonent.component';

describe('NgProjectCompoonentComponent', () => {
  let component: NgProjectCompoonentComponent;
  let fixture: ComponentFixture<NgProjectCompoonentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgProjectCompoonentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgProjectCompoonentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
