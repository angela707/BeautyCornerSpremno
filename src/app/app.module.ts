import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { PostDetailsComponent } from './post-details/post-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponentComponent,
    PostDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
