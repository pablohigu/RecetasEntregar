import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Receta } from '../../recipe.model';
import { AdButtonComponent } from '../../atoms/button/button';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [RouterModule, AdButtonComponent, DecimalPipe], 
  templateUrl: './recipe-detail.html'
})
export class RecipeDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private recipeService = inject(RecipeService);
  
  // Usamos una señal para la receta, inicializada como undefined
  receta = signal<Receta | undefined>(undefined);

  ngOnInit() {
    // 1. OBTENER ID (CORRECCIÓN TIPO):
    // MockAPI usa IDs de texto, así que NO lo convertimos a Number.
    const id = this.route.snapshot.paramMap.get('id');

    // 2. PETICIÓN ASÍNCRONA (CORRECCIÓN OBSERVABLE):
    // Como getRecipeById ahora devuelve un Observable (porque viaja por internet),
    // nos suscribimos para recibir el dato cuando llegue.
    if (id) {
      this.recipeService.getRecipeById(id).subscribe({
        next: (data) => {
          this.receta.set(data); // Guardamos el dato en la señal
        },
        error: (err) => {
          console.error('Error al cargar la receta:', err);
        }
      });
    }
  }
}