import { CustomValidators } from "./custom-validators"



export class AppComponent imolements OnInit{
  projectForm:FormGroup



  ngONInit(){
    this.projectForm=new FormGroup({
      'projectName': new FormControl(null, [Validators.required], CustomValidators.invalidProjectName, CustomValidators.asyncInvalidProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    })
  }

  onSaveProject(){
    console.log(this.projectForm.value)
  }


}
