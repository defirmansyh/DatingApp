import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from "rxjs/operators";
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';
  private currentUSerSource = new ReplaySubject<User>(1);
  currentUsers$ = this.currentUSerSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model:any){
    return this.http.post(this.baseUrl + 'account/login',model).pipe(
      map((response:User) => {
        const user = response;
        if (user){
          localStorage.setItem("user",JSON.stringify(user));
          this.currentUSerSource.next(user);
        }
      })
    )
  }

  register(model: any){
    return this.http.post(this.baseUrl+'account/register',model).pipe(
      map((user:User) => {
        if (user) {
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUSerSource.next(user);
        }
      })
    )
  }

  setCurrentUser(user:User){
    this.currentUSerSource.next(user);
  }

  logout(){
    localStorage.removeItem("user");
    this.currentUSerSource.next(null);
  }
}
