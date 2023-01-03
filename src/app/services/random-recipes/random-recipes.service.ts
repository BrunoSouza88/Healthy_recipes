import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomRecipesService {

  constructor(private http: HttpClient) { }

  listRandomFood(take: number) {
    const apiURL = `https://api.spoonacular.com/recipes/random?apiKey=2fccbee3e5f14f1e9c6714cfd9717b6a&number=${take}`;

    return this.http.get(apiURL);
  }
}
