import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  FormsModule, ReactiveFormsModule
} from '@angular/forms';
import { FormComponent } from './form/form.component';
import { DeatailComponent } from './deatail/deatail.component'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DeatailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
