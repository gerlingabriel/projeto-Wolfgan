import { Login } from './login';
import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/service/loginService.service';

@Component({
  selector: 'app-paginaLogin',
  templateUrl: './paginaLogin.component.html',
  styleUrls: ['./paginaLogin.component.css']
})
export class PaginaLoginComponent implements OnInit {

  public loginInvalid = false;
  usuario = new Login();

  constructor(private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  login(){
    this.loginService.login(this.usuario.cnpj, this.usuario.senha);
    console.log(localStorage.getItem('id_token'));
  }

}
