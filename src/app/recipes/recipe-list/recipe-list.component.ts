import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i.pinimg.com/originals/b0/b3/b4/b0b3b44918b440f8646854ffd9d458df.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i.pinimg.com/originals/b0/b3/b4/b0b3b44918b440f8646854ffd9d458df.jpg'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
