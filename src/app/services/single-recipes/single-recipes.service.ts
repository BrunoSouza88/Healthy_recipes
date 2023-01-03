import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleRecipesService {

  constructor(private http: HttpClient) { }

  takeRecipe(id: number){
    const apiURL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=2fccbee3e5f14f1e9c6714cfd9717b6a`;

    return this.http.get(apiURL);
  }

  takeSimilarRecipe(id: number) {
    const apiURL = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=2fccbee3e5f14f1e9c6714cfd9717b6a`;

    return this.http.get(apiURL)
  }
}
