export class AuthService{
  loggedIn=false


  isAuthenticated(){
    const promise=new Promise(
      (reslove, reject => {
        setTimeout () => {
         reslove(this.loggedIn), 800)
        }
      })
    )
    return promise
  }

  login({
    this.loggedIN=true
  })

  logout (){
    this.loggedIn =false
  }
}
