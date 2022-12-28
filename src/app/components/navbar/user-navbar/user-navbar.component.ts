import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
  isLoggedIn=false;
  user:any=null;

  constructor(public login:LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    }) 
  }

  public logout()
  { 
    this.login.logout();
   window.location.reload();
  //  this.login.loginStatusSubject.next(false);
  }

}
