import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private appConstrants: AppComponent, private router: Router,  private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.appConstrants.isAuthenticated = true
      this.cdr.detectChanges();
    }else {
      this.router.navigate([''])
    }
  }

}
