import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { createInjectableType } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class Interceptor implements HttpInterceptor {
          constructor(private loginservice:LoginService){}
          intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>  {
                    let authrequest=req;
                  const token=this.loginservice.gettoken();
                  if (token!=null) {
                    authrequest=authrequest.clone({setHeaders:{Authorization:`Bearer ${token}`},
          });
                  }
                  return next.handle(authrequest);
          }
}  

export const authInterceptorProvicers=[
          {
                    provide: HTTP_INTERCEPTORS,
                    useClass: Interceptor,
                    multi: true,  
          }
                 
]
