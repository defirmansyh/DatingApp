import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Dating App';
  users: any;

  constructor(private accountService : AccountService, private bnIdle: BnNgIdleService, 
    private router: Router) {
    // this.bnIdle.startWatching(60).subscribe((isTimedOut: boolean) => {
    //   if (localStorage.getItem("user") !== null) {
    //     if (isTimedOut) {
    //       this.accountService.logout();
    //       this.router.navigateByUrl('/');
    //     } 
    //   }
    // });
  }

  ngOnInit(){
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user:User = JSON.parse(localStorage.getItem("user"));
    this.accountService.setCurrentUser(user);
  }
  
}
