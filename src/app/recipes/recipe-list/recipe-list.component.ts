import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes:Recipe[] = [
    new Recipe('A test Recipe' , 'This is a test ', 'https://static.cuisineaz.com/400x320/i37832-blanquette-de-veau-a-l-ancienne.jpeg'),
    new Recipe('A test Recipe' , 'This is a test ', 'https://static.cuisineaz.com/400x320/i37832-blanquette-de-veau-a-l-ancienne.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
