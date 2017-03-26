import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgHeaderComponent } from './ng-header/ng-header.component';
import { NgProjectsComponent } from './ng-projects/ng-projects.component';
import { NgSkillsComponent } from './ng-skills/ng-skills.component';
import { NgTestimonialComponent } from './ng-testimonial/ng-testimonial.component';
import { NgCounterComponent } from './ng-counter/ng-counter.component';
import { NgFooterComponent } from './ng-footer/ng-footer.component';
import { NgGotoTopComponent } from './ng-goto-top/ng-goto-top.component';
import { NgArrowDownComponent } from './ng-arrow-down/ng-arrow-down.component';
import { NgsocialComponent } from './ng-social/ng-social.component';


@NgModule({
  declarations: [
    AppComponent,
    NgHeaderComponent,
    NgProjectsComponent,
    NgSkillsComponent,
    NgTestimonialComponent,
    NgCounterComponent,
    NgFooterComponent,
    NgGotoTopComponent,
    NgArrowDownComponent,
    NgsocialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
