import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(query: string) {
    const apiURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=2fccbee3e5f14f1e9c6714cfd9717b6a&query=${query}&number=10`

    return this.http.get(apiURL)
  }
}
