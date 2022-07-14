import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TimelineApiService } from "src/app/shared/services/timeline-api.service";
import { LoginComponent } from "../../login/login.component";

@Injectable()
export class Inter implements HttpInterceptor{
  constructor(private t:LoginComponent){}
  intercept(req: HttpRequest<any>, next: HttpHandler,): Observable<HttpEvent<any>> {
         req=req.clone({
          setHeaders:{
            Authorization: 'bearer '+this.t.token
          }
        })
        // console.log(req)
        return next.handle(req)
  }
}
