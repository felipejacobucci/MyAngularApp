import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from '../mock-users';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private singleUserUrl = ''

  getUsers() : Observable<User[]> {
    //return of(USERS);

    var usersUrl = 'https://api.github.com/users?since=8452059';

    return this.httpClient.get<User[]>(usersUrl);

  }

  getSingleUser(login : string) : Observable<User> {

    var singleUserUrl = `https://api.github.com/users/${login}`;

    return this.httpClient.get<User>(singleUserUrl);
  }

  constructor(private httpClient : HttpClient) { }
}