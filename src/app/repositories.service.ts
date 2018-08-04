import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Repository } from './repository';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  getRepositories(login : string) : Observable<Repository[]> {
    
    var reposUrl = `https://api.github.com/users/${login}/repos`;

    return this.httpClient.get<Repository[]>(reposUrl);
  }

  constructor(private httpClient : HttpClient) { }
}
