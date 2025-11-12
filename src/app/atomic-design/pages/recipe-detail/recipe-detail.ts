import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Receta } from '../../recipe.model';
import { AdButtonComponent } from '../../atoms/button/button';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [RouterModule, AdButtonComponent], 
  templateUrl: './recipe-detail.html'
})
export class RecipeDetailComponent implements OnInit {
  // Inyectamos el servicio que nos permite "leer" la URL del navegador
  private route = inject(ActivatedRoute);
  
  // Inyectamos nuestro servicio de datos para buscar la receta
  private recipeService = inject(RecipeService);
  
  // Variable para guardar la receta que encontremos. Puede ser undefined si no existe.
  receta?: Receta;

  // ngOnInit se ejecuta automáticamente nada más cargar la página
  ngOnInit() {
    // 1. LEER LA URL:
    // 'snapshot' es una foto instantánea de la URL en este momento.
    // 'paramMap' es el mapa de parámetros definidos en app.routes.ts (allí pusimos 'recetas/:id').
    // .get('id') obtiene el valor que hay en el sitio de ':id'.
    // Ejemplo: Si la URL es /recetas/15, esto nos devuelve el string "15".
    const idString = this.route.snapshot.paramMap.get('id');
    
    // Convertimos el texto a número ("15" -> 15)
    const id = Number(idString);

    // 2. BUSCAR DATOS:
    // Si el ID es válido (existe y es un número), le pedimos al servicio esa receta concreta.
    if (id) {
      this.receta = this.recipeService.getRecipeById(id);
    }
    
    // Si no se encuentra la receta, la variable 'this.receta' se queda undefined
    // y el HTML mostrará el bloque @else (Receta no encontrada).
  }
}