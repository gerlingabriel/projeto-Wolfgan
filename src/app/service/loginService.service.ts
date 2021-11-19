import { tap, shareReplay } from 'rxjs/operators';
import { JwtRequest } from './models/JwtRequest';
import { JwtResponse } from './models/JwtResponse';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from './../AppConstants';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'profanis_auth';
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http: HttpClient) {
    this._isLoggedIn$.next(!!this.token);
   }

   login(username: string, password: string) {
    return this.http.post(username, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.TOKEN_NAME, response.token);
      })
    );
  }

  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }
}
