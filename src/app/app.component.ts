import { AfterViewInit, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/pages/login/loginService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'projeto-Wolfgan';

  isAuthenticated = false;
  isMenu = false;

  constructor(private login: LoginServiceService, private router: Router, private cdr: ChangeDetectorRef){}


  ngAfterViewInit(): void {
    this.isAuthenticated=true;
    this.cdr.detectChanges()
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null ) {
      this.router.navigate([''])
    }
    this.isAuthenticated=false
  }

  logout(){
    this.login.logout();
    this.isAuthenticated = false;
    this.router.navigate([""]);
  }

}
