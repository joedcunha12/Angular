import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post/post.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentItemComponent } from './comment-item/comment-item.component';

@NgModule({
  declarations: [PostComponent, CommentFormComponent, CommentItemComponent],
  imports: [CommonModule, PostRoutingModule],
})
export class PostModule {}
