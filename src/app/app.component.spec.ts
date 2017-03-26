/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgHeaderComponent } from './ng-header/ng-header.component'
import { NgSkillsComponent } from './ng-skills/ng-skills.component'
import { NgProjectsComponent } from './ng-projects/ng-projects.component'
import { NgTestimonialComponent } from './ng-testimonial/ng-testimonial.component'
import { NgCounterComponent } from './ng-counter/ng-counter.component'
import { NgFooterComponent } from './ng-footer/ng-footer.component'
import { NgGotoTopComponent } from './ng-goto-top/ng-goto-top.component'
import { NgArrowDownComponent } from './ng-arrow-down/ng-arrow-down.component'
import { NgsocialComponent } from './ng-social/ng-social.component'

describe('AppComponent', () => {

  beforeEach(() => {

      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          NgHeaderComponent,
          NgSkillsComponent,
          NgProjectsComponent,
          NgTestimonialComponent,
          NgCounterComponent,
          NgFooterComponent,
          NgGotoTopComponent,
          NgArrowDownComponent,
          NgsocialComponent,
        ],
      });
      TestBed.compileComponents();
    }
  );

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render full name in a l-logo', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#l-logo a').textContent).toContain('Alexey Romanov.');
  }));
});
