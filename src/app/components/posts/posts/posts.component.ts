import { Component } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  posts: Post[] = [];
  constructor(private postService: PostService) {
    this.get();
  }

  get(): void {
    this.postService.getPost().subscribe({
      next: (res: any) => {
        this.posts = res;
        console.log(this.posts);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('get requested done');
      },
    });
  }

  delete(post: Post): void {
    this.posts = this.posts.filter((p) => p.id !== post.id);
    this.postService.deletePost(post).subscribe();
  }
}
