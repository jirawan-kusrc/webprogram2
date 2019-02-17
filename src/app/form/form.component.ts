import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { User } from '../user';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  formGroup: FormGroup;
 // @Output change = new EventEmitter();
  @Output() change = new EventEmitter();
  constructor(
    private formBuild: FormBuilder
  ) {

  }
  ngOnInit() {
    this.formGroup = this.formBuild.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      emailName: ['a@b.com',[this.EmailValidator]],
      ageName: ['',[Validators.min(0),Validators.max(99)]]
    })
  }
  EmailValidator(control :AbstractControl){
    const value:string = control.value;
    if(value && value.includes('@')){
        return null;
    }
    return {emailName:true}
  }

  onSubmit(form: FormGroup) {
    console.log(form.valid, form.invalid);
    console.log(<FormControl>form.get('firstName').errors);
    if (form.valid) {
      const { firstName, lastName, emailName, ageName } = form.value;
      console.log(firstName, lastName, emailName, ageName)
      const user = new User(firstName, lastName, ageName,emailName)
      this.change.emit(user);
      console.log(user);
    } else {
      ['firstName', 'lastName','emailName','ageName'] .forEach((key:string)=> {
        console.log(key);
        console.log(form.get(key).errors);
        form.get(key).markAsTouched();
      })
    }


    //console.log(user);

  }
}