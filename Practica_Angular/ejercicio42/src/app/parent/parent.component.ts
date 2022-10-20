import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  movieList: Movie[];

  configUrl: string = "http://swapi.dev/api/films/";

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  makeRequest() {
    this.http.get(this.configUrl)
      .subscribe((movie: any) => {
      this.movieList = movie.results;
    })
  }
}
