import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/pages/login/loginService.service';

import { AppComponent } from '../../../app.component';
import { Login } from './login';


@Component({
  selector: 'app-paginaLogin',
  templateUrl: './paginaLogin.component.html',
  styleUrls: ['./paginaLogin.component.css']
})
export class PaginaLoginComponent implements OnDestroy {

  public loginInvalid = false;
  usuario = new Login();
  error = '';

  constructor(private loginService: LoginServiceService, private router: Router, private appComponent: AppComponent) { }

  ngOnDestroy() {

  }

  login() {
    this.loginService.login(this.usuario.cnpj, this.usuario.senha)
    this.appComponent.isAuthenticated = true;
  }

}
