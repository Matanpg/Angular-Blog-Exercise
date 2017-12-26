import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../posts-info.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  posts:object[];

  constructor(
    private postsInfoService:PostService
  ) { }

  ngOnInit() {
    console.log(this.postsInfoService.getPosts());
    this.postsInfoService.getPosts().subscribe(data => {this.posts = data});
    console.log(this.posts);
  }

}
