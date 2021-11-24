import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts/posts.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostItemComponent } from './post-item/post-item.component';


@NgModule({
  declarations: [PostsComponent, PostFormComponent, PostItemComponent],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
