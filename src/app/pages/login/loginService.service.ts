import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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

    return this.http.post(AppConstants.login, JSON.stringify(login) ).subscribe((data) => {

          var token = JSON.parse(JSON.stringify(data)).Authorization.split(" ")[1];
          console.log(token)
          localStorage.setItem(this.TOKEN_NAME, token);

          this.router.navigate(["inicio"]);
        },
        error => {
          console.error("Erro de Login");
          alert("Acesso Negado");
        }
      );

  }

  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  logout(){
    localStorage.removeItem(this.TOKEN_NAME);
  }
}
