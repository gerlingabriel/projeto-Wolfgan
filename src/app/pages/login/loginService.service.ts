import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { AppConstants } from '../../AppConstants';
import { Login } from './paginaLogin/login';

@Injectable({ providedIn: 'root'})

export class LoginServiceService {
  [x: string]: any;

  TOKEN_NAME = 'token';

  constructor(private http: HttpClient, private router: Router) {
   }

   login(username: string, password: string) {

    let login = new Login();
    login.cnpj = username
    login.senha = password

    return this.http.post(AppConstants.login, { pa }).pipe( map( ( res: any) => {
      localStorage.setItem(this.TOKEN_NAME, res.Authorization.split(" ")[1])
      return res
    }  ))

  }

  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  logout(){
    localStorage.removeItem(this.TOKEN_NAME);
  }
}
