import { Component, OnInit, HostBinding } from '@angular/core';
import { Post, PostService } from '../posts-info.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post$: Observable<Post>;

  constructor(
    private postsInfoService:PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.post$ = this.route.paramMap
    .switchMap((params: ParamMap) =>
      this.postsInfoService.getPost(params.get('id')));
    }

  gotoPosts(post: Post) {
        this.router.navigate(['/Main']);
      }
  }
