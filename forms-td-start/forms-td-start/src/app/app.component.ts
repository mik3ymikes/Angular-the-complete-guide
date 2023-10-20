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
   console.log(this.signupForm)
  }
}
