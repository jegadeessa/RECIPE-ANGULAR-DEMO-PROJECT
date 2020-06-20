/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipeStore } from './recipe.store';

describe('Service: Recipe.store.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeStore]
    });
  });

  it('should ...', inject([RecipeStore], (service: RecipeStore) => {
    expect(service).toBeTruthy();
  }));
});
