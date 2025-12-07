import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-recipe-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recipe-form.html',
})
export class AdRecipeFormComponent {
  private fb = inject(FormBuilder);
  private recipeService = inject(RecipeService);
  private router = inject(Router); 

  recipeForm = this.fb.group({
    titulo: ['', Validators.required],
    descripcion: ['', Validators.required],
    imagen: ['', [Validators.required, Validators.pattern('https?://.+')]],
    calorias: [0, [Validators.required, Validators.min(1)]],
    // Array dinámico para ingredientes
    ingredientes: this.fb.array([], Validators.required)
  });

  // Getter para usar en el HTML
  get ingredientes() {
    return this.recipeForm.get('ingredientes') as FormArray;
  }

  addIngrediente() {
    this.ingredientes.push(this.fb.control('', Validators.required));
  }

  removeIngrediente(index: number) {
    this.ingredientes.removeAt(index);
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      const formValue = this.recipeForm.value;
      const newRecipe = {
        titulo: formValue.titulo!,
        descripcion: formValue.descripcion!,
        imagen: formValue.imagen!,
        calorias: formValue.calorias!,
        ingredientes: formValue.ingredientes as string[] || []
      };

      this.recipeService.addRecipe(newRecipe);
      this.recipeForm.reset();
      this.router.navigate(['/recetas']); 
    }
  }

  constructor() {
    this.addIngrediente();
  }
}