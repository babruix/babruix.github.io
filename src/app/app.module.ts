import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgHeaderCompoonentComponent } from './ng-header-compoonent/ng-header-compoonent.component';
import { NgProjectCompoonentComponent } from './ng-project-compoonent/ng-project-compoonent.component';
import { NgServicesCompoonentComponent } from './ng-services-compoonent/ng-services-compoonent.component';
import { NgTestimonialComponentComponent } from './ng-testimonial-compoonent/ng-testimonial-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NgHeaderCompoonentComponent,
    NgProjectCompoonentComponent,
    NgServicesCompoonentComponent,
    NgTestimonialComponentComponent
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
