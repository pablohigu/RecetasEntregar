import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdRecipeFormComponent } from '../../organisms/recipe-form/recipe-form';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-add',
  standalone: true,
  imports: [CommonModule, AdRecipeFormComponent, RouterLink],
  templateUrl: './recipe-add.html',
})
export class RecipeAddComponent {

}