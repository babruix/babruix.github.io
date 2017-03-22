import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgHeaderComponent } from './ng-header/ng-header.component';
import { NgProjectComponent } from './ng-project/ng-project.component';
import { NgServicesComponent } from './ng-services/ng-services.component';
import { NgTestimonialComponent } from './ng-testimonial/ng-testimonial.component';
import { NgCounterComponent } from './ng-counter/ng-counter.component';
import { NgfooterComponent } from './ngfooter/ngfooter.component';


@NgModule({
  declarations: [
    AppComponent,
    NgHeaderComponent,
    NgProjectComponent,
    NgServicesComponent,
    NgTestimonialComponent,
    NgCounterComponent,
    NgfooterComponent
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
