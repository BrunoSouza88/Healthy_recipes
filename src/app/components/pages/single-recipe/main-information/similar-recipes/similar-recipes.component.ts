import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { SingleRecipesService } from 'src/app/services/single-recipes/single-recipes.service';

@Component({
  selector: 'app-similar-recipes',
  templateUrl: './similar-recipes.component.html',
  styleUrls: ['./similar-recipes.component.css']
})
export class SimilarRecipesComponent implements OnInit{
  public loading = true;
  public similarRecipes: any = [];

  @Input() recipeIdSimilar!: number;

  constructor(private service: SingleRecipesService) {}

  ngOnInit(): void {
    this.takeSimilarRecipes(this.recipeIdSimilar);
   }

  takeSimilarRecipes(id: number) {
    this.service.takeSimilarRecipe(id).pipe(finalize(() => {
      this.loading = false;
    })).subscribe((data: any) => {
      this.similarRecipes = data.slice(0, 3);
    })
  }

  reloadPage(){
    setTimeout(() => {window.location.reload();
    },1)
  }
}
