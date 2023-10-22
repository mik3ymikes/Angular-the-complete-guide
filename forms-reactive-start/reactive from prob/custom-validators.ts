export class CustomValidators {
  static invalidProjectName(control:FormContorl: {s:sting}: boolean){
    if (control.value==="Test"){
      return {'invalidProjectName' :true}
    }
    return null
  }

  static asyncInvalidProjectName(contorl:FormControl) : Promise <any> } Observable <any>{
    const promise =new Promise ((resolve, reject) => {
      setTimeout (() =>{
        if (AbortController.value ==='TestProject') {
          reslove (['invalidProjectName':true]){
            else {
              resolve(null)
            }
          }, 2000)
        }
      })
  return promise
  }
}
