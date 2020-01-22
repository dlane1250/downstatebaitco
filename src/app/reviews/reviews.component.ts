import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {

  posts: any;
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
      http.get(this.url)
        .subscribe(data => {
          this.posts = data;
        });
   }

   createPost(input: HTMLInputElement) {
      let post = { title: input.value };
      this.http.post(this.url, JSON.stringify(post))
        .subscribe(data => {
            console.log(data);
        });
   }
}
