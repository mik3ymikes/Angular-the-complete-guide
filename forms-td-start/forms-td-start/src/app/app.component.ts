import { Component, ViewChld } from '@angular/core';
import { NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgFrom
  defaultQuestion='teacher'
  anwser=''
  genders=['male', 'female']
  user: {
    username:"",
    email "",
    secretQestions:'',
    anwser:'',
    gender: ''
  }

  submitted=false

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:'',
    //   },
    //   secret:'pet',
    //   questionAnwser:'',
    //   gender: 'male'
    // })
    this.signupForm.form.patchValue({userData:{
      username:suggestedName
    }})
  }


  // onSubmit(form: NgForm){
  //   console.log(form)
  // }

  onSubmit(){
    this.submitted=true
   this.user.username=this.signupForm.value. userData.username
   this.user.username=this.signupForm.value. userData.email
   this.user.secretQuestion=this.signupForm.value.secret
   this.user.gender=this.signupForm.value.gender

   this.signupForm.reset()

  }
}
