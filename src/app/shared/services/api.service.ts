import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
  })

export class ApiService {
  _data:any;
  constructor(private httpClient: HttpClient) {}

  // https://www.youtube.com/watch?v=KBRXvnZKz4c
  // https://api.openbrewerydb.org/breweries?per_page=3
  // https://jsonplaceholder.typicode.com/posts

  callApi() {
    return this.httpClient.get('https://api.openbrewerydb.org/breweries?per_page=3');
  }

}









