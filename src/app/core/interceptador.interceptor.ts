import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginServiceService } from 'src/app/pages/login/loginService.service';

@Injectable()
export class InterceptadorInterceptor implements HttpInterceptor {

  constructor(private login: LoginServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.login.token !== null ) {
      const token = 'Bearer ' + this.login.token
      const tokenRequest = request.clone({
        headers : request.headers.set('Authorization', token)
      });
      return next.handle(tokenRequest);
    }else{
      return next.handle(request);
    }

  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptadorInterceptor,
      multi: true,
    },
  ],
})
export class HttpInterceptorModule {}
