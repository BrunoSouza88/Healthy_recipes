import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { SingleRecipesService } from 'src/app/services/single-recipes/single-recipes.service';

@Component({
  selector: 'app-main-information',
  templateUrl: './main-information.component.html',
  styleUrls: ['./main-information.component.css']
})
export class MainInformationComponent implements OnInit {
  public loading: boolean = true;
  public recipeID: number = 1;
  public food: any = [];

  @Output() recipeIdSimilar!: number;

  constructor(private service: SingleRecipesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRecipeID();
    this.takeRecipe(this.recipeID);
    this.recipeIdSimilar = this.recipeID;
   }

  getRecipeID() {
    this.route.queryParams.subscribe((queryParams: any) => {
      this.recipeID = queryParams['id'];
    })
  }

  takeRecipe(id: number) {
    this.service.takeRecipe(id)
    .pipe(finalize(() => {
      this.loading = false;
    })).subscribe((data: any) => {
      this.food = data;
    })
  }
}
