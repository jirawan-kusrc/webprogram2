import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  formGroup : FormGroup;
  constructor(
    private formBuild : FormBuilder
  ){
  
  }
  ngOnInit(){
    this.formGroup = this.formBuild.group({
      firstName:['Jirawan'],
      lastName:['Charoensuk'],
      emailName:['a@b.com'],
      ageName:['30']
    })
  }

  onSubmit(form: FormGroup){
    const {firstName, lastName,emailName,ageName} = form.value;
    console.log(firstName,lastName,emailName,ageName)
    const user = new User(firstName,lastName,emailName,ageName)
    console.log(user);
   }
}