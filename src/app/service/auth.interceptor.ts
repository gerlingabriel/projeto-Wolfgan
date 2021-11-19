import { LoginServiceService } from 'src/app/service/loginService.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private login: LoginServiceService) {}

  intercept(
    request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      
    request = request.clone({
      headers: request.headers.set('authorization', this.login.token),
    });

    return next.handle(request);
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
