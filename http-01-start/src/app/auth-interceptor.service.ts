import { HttpInterceptor} from '@angular/common/http';




export class AuthInterceptorService implements HttpInterceptor{
  intercept(req:HttpRequest <any>, next : HttpHandler){
    console.log(req.url)
    console.log('Request is on its way')
    const modifiedRequest=req.clone({headers:req.headers.append('Auth', 'xyz')})
    return next.handle(modifiedRequest)
  }
}
