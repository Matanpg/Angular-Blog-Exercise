import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Post {
  constructor(public id: number, public title: string, public content: string) { }
}
  const POSTS = [
    new Post(1, 'First Post', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, esse!'),
    new Post(2, 'Second Post', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, esse!'),
    new Post(3, 'Third Post', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, esse!'),
    new Post(4, 'Fourth Post', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, esse!')
  ];

@Injectable()
export class PostService {
  getPosts() { return Observable.of(POSTS); }

  getPost(id: number | string) {
    return this.getPosts()
    .map(posts => posts.find(post => post.id === +id));
  }
}
