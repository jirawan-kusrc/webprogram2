import { Component,OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form101';
}
export class FormComponent implements OnInit {
  formGroup : FormGroup;
  constructor(
    private formBuild : FormBuilder
  ){
  
  }
  ngOnInit(){
    this.formGroup = this.formBuild.group({
      firstName:[''],
      lastName:['']
    })
  }
}