import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';
import { UserService } from '../user.service';
import { RepositoriesService } from '../repositories.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  selectedUser : User;
  users : User[];
  repositories : Repository[];

  getUsers() : void {
    this.userService.getUsers().subscribe(u => this.users = u);
  }

  onSelect(user : User): void {
    
    //get the single user API, to fill the created_at property
    this.userService.getSingleUser(user.login).subscribe(s => user.created_at = s.created_at);
    
    //get the user repositories API to fill the repositories array
    this.repositoriesService.getRepositories(user.login).subscribe(r => this.repositories = r);

    this.selectedUser = user;
  }

  constructor(private userService : UserService,
              private repositoriesService : RepositoriesService) { }

  ngOnInit() {
    this.getUsers();
  }
}


