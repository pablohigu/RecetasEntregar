import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // <-- IMPORTANTE: Añadir Router

@Component({
  selector: 'app-ad-recipe-form',
  standalone: true, // <-- Añadir standalone: true
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recipe-form.html',
})
export class AdRecipeFormComponent {
  private fb = inject(FormBuilder);
  private recipeService = inject(RecipeService);
  private router = inject(Router); // <-- Inyectar el Router

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
      // <-- NUEVO: Redirigir al listado después de añadir
      this.router.navigate(['/recetas']); 
    }
  }
}