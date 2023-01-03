import { TestBed } from '@angular/core/testing';

import { SingleRecipesService } from './single-recipes.service';

describe('SingleRecipesService', () => {
  let service: SingleRecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleRecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
