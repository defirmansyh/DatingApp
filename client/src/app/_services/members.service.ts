import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

// let token = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).token : "";

// const httpOptions = {
//   headers: new HttpHeaders({
//     Authorization: 'Bearer ' + token
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMembers(){
    // return this.http.get<Member[]>(this.baseUrl+'users',httpOptions);
    return this.http.get<Member[]>(this.baseUrl+'users');
  }

  getMember(username: string){
    // return this.http.get<Member>(this.baseUrl+'user/'+username,httpOptions);
    return this.http.get<Member>(this.baseUrl+'users/'+username);
  }
}
