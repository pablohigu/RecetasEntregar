import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdRecipeCardComponent } from '../../molecules/recipe-card/recipe-card';
import { Receta } from '../../recipe.model';

@Component({
  selector: 'app-ad-recipe-list',
  standalone: true,
  imports: [CommonModule, AdRecipeCardComponent],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.scss'
})
export class AdRecipeListComponent {
  recipes = input.required<Receta[]>();
  deleteRequest = output<string>();
  voteRequest = output<Receta>();
}