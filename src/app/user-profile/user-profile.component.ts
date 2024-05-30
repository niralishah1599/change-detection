import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  constructor() {

  }
  userPosts: any = [
    { id:1 , title: 'Post 1' },
    { id:2 , title: 'Post 2' },
    { id:3 , title: 'Post 3' }
  ];
  public person: any = {
    name: 'John Doe',
    age: 20,
  };

  addPost() {
    // this.userPosts = [...this.userPosts, { id:4 ,title: 'New Post' }]; // Create a new array reference with the new post added
    this.userPosts.push({id:4,title: 'Post 4'})
  }


  public reassign(): void {
    // this.person.name = 'value';
    // this.person.age = 30;
    this.person = {
      ...this.person,
      age: 25,
    };
  }
}
