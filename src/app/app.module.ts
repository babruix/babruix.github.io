import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgHeaderCompoonentComponent } from './ng-header-compoonent/ng-header-compoonent.component';
import { NgProjectCompoonentComponent } from './ng-project-compoonent/ng-project-compoonent.component';


@NgModule({
  declarations: [
    AppComponent,
    NgHeaderCompoonentComponent,
    NgProjectCompoonentComponent
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
