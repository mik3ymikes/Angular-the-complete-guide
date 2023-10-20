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


  ngONInit(){
    this.signupForm=new FormGroup({
      'username': new FomrControl(null, Validators.required),
      'email': new FomrControl(null, [Validators.required, Validators.email]),
      'gender': new FomrControl('male'),


    })
    onsubmit(){
      console.log(this.signupForm)
    }
  }
}
