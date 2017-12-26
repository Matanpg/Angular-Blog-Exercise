import { TestBed, inject } from '@angular/core/testing';

import { PostsInfoService } from './posts-info.service';

describe('PostsInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsInfoService]
    });
  });

  it('should be created', inject([PostsInfoService], (service: PostsInfoService) => {
    expect(service).toBeTruthy();
  }));
});
