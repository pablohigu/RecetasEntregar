import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { AdRecipeCardComponent } from '../../molecules/recipe-card/recipe-card';

@Component({
  selector: 'app-ad-recipe-list',
  imports: [CommonModule, AdRecipeCardComponent],
  templateUrl: './recipe-list.html',
})
export class AdRecipeListComponent {
  private recipeService = inject(RecipeService);
  // Obtenemos el signal de recetas del servicio
  recipes = this.recipeService.recipes;

  // Método para manejar el evento de borrado
  handleDelete(id: number) {
    if (confirm('¿Estás seguro de que quieres borrar esta receta?')) {
      this.recipeService.deleteRecipe(id);
    }
  }
}