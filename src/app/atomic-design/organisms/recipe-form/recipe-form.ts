import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ad-recipe-form',
  imports: [CommonModule, ReactiveFormsModule], // Importamos ReactiveFormsModule
  templateUrl: './recipe-form.html',
})
export class AdRecipeFormComponent {
  private fb = inject(FormBuilder);
  private recipeService = inject(RecipeService);
  // Creamos el formulario reactivo
  recipeForm = this.fb.group({
    titulo: ['', Validators.required],
    descripcion: ['', Validators.required],
    imagen: ['', [Validators.required, Validators.pattern('https?://.+')]] // Valida que sea una URL
  });

  onSubmit() {
    if (this.recipeForm.valid) {
      this.recipeService.addRecipe(this.recipeForm.value as any);
      this.recipeForm.reset();
    }
  }
}