import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/pages/login/loginService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'projeto-Wolfgan';

  isAuthenticated = false;
  isMenu = false;

  constructor(private login: LoginServiceService, private router: Router){}

  ngOnInit(): void {
    if (localStorage.getItem('token') == null ) {
      this.router.navigate([''])
    }
  }

  logout(){
    this.login.logout();
    this.isAuthenticated = false;
    this.router.navigate([""]);
  }

  mostrarMenu(){
    if (this.isMenu) {
      this.isMenu = false;
    } else {
      this.isMenu = true;
    }
  }
}
