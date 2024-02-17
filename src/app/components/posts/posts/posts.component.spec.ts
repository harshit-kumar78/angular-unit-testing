import { of } from 'rxjs';
import { PostService } from '../../../services/post.service';
import { PostsComponent } from './posts.component';
import { Post } from '../../../models/post.model';

describe('PostsComponent', () => {
  let POSTS: Post[];
  let mockPostService: any;
  let postComponent: PostsComponent;

  beforeEach(() => {
    POSTS = [
      { id: 1, title: 'ttt', body: 'bbbb' },
      { id: 2, title: 'ttt', body: 'bbbb' },
    ];
    mockPostService = jasmine.createSpyObj(PostService, [
      'getPost',
      'deletePost',
    ]);
    mockPostService.getPost.and.returnValue(of(true));
    mockPostService.deletePost.and.returnValue(of(true));
    postComponent = new PostsComponent(mockPostService);
  });

  it('should create an instance', () => {
    // let mockPostService: any = jasmine.createSpyObj(PostService, [
    //   'getPost',
    //   'deletePost',
    // ]);
    // mockPostService.getPost.and.returnValue(of(true));
    // mockPostService.deletePost.and.returnValue(of(true));
    // let postComponent = new PostsComponent(mockPostService);
    postComponent.posts = POSTS;
    postComponent.delete(POSTS[0]);
    // expect(postComponent.posts.length).toBe(1);
    expect(postComponent).toBeTruthy();
  });

  it('should delte the post', () => {
    // let mockPostService: any = jasmine.createSpyObj(PostService, [
    //   'getPost',
    //   'deletePost',
    // ]);
    // mockPostService.getPost.and.returnValue(of(true));
    // mockPostService.deletePost.and.returnValue(of(true));
    // let postComponent = new PostsComponent(mockPostService);
    postComponent.posts = POSTS;
    postComponent.delete(POSTS[0]);
    expect(postComponent.posts.length).toBe(1);
  });

  it('should call the deltePost in service only once', () => {
    // let mockPostService: any = jasmine.createSpyObj(PostService, [
    //   'getPost',
    //   'deletePost',
    // ]);

    // mockPostService.getPost.and.returnValue(of(true));
    // mockPostService.deletePost.and.returnValue(of(true));
    // let postComponent = new PostsComponent(mockPostService);
    postComponent.posts = POSTS;
    postComponent.delete(POSTS[0]);
    expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
  });

  it('should delete the selected post only', () => {
    // let mockPostService: any = jasmine.createSpyObj(PostService, [
    //   'getPost',
    //   'deletePost',
    // ]);
    // mockPostService.getPost.and.returnValue(of(true));
    // mockPostService.deletePost.and.returnValue(of(true));
    // let postComponent = new PostsComponent(mockPostService);
    postComponent.posts = POSTS;
    postComponent.delete(POSTS[0]);

    for (let post of postComponent.posts) {
      expect(post).not.toEqual(POSTS[0]);
    }
  });
});
