import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})

export class ReviewsComponent implements OnInit {
  reviews: any;
  private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }
    
  httpGet = this.http
      .get(this.url)
      .subscribe(response => {
          this.reviews = response;
      })

  ngOnInit() {
    this.httpGet;
  }

  createReview( input: HTMLInputElement ) {
    console.log("createReview");

    let review = { title: input.value }
    input.value = '';

    this.http
      .post(this.url, JSON.stringify(review))
      .subscribe(response => {
        review['id'] = response['id'];
        this.reviews.splice(0, 0, review);
      })
  }
}
