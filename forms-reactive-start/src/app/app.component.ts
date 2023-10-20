import { Component } from '@angular/core';
import {FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements Oninit {
  genders = ['male', 'female'];
  signupForm=FormGroup
  forbiddenUsernames=['chirs', 'anna']


  ngONInit(){
    this.signupForm=new FormGroup({
      'userData': new FormGroup({
        'username': new FomrControl(null, [Validators.required, this.forbiddenUsernames.bind(this)]),
        'email': new FomrControl(null, [Validators.required, Validators.email]),
      })
      'gender': new FomrControl('male'),
      'hobbies': new FormArray([])


    })
    onsubmit(){
      console.log(this.signupForm)
    }

    onAddHobby(){
      const control= new FormControl(null, Validators.required)
   (<FormArray>this.signupForm.get('hobbies')).push(control)
  }


  forbiddenNames( control: FormControl): {
    [s: string : Boolean]

    if (this.forbiddenUsernames.indexOf(control.value !== -1){
      return {'nameIsForbidden' :true}
    }
    return null
  }

}
