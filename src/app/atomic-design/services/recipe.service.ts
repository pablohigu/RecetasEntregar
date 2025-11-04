import { Injectable, signal } from '@angular/core';
import { Receta } from '../recipe.model';

// Datos iniciales
const DEFAULT_RECIPES: Receta[] = [
  {
    id: 1,
    titulo: 'Paella Valenciana',
    descripcion: 'Un clásico de la cocina española. Perfecta para disfrutar en familia los domingos.',
    imagen: 'https://imgs.search.brave.com/Lqqw50L9yW_Q2JxzzGCIVpbj_ckxB2nawVN5wtF9uHc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9wYWVs/bGEtdmFsZW5jaWFu/YS1lbGxlLWdvdXJt/ZXQtNC02N2EzMWFi/NWM4NjlkLmpwZz9y/ZXNpemU9NjQwOio'
  },
  {
    id: 2,
    titulo: 'Tacos al Pastor',
    descripcion: 'Deliciosos tacos de cerdo marinado con piña, cilantro y cebolla. Un sabor auténtico de México.',
    imagen: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 3,
    titulo: 'Pizza Margherita',
    descripcion: 'La pizza más icónica y sencilla de Italia, con tomate, mozzarella fresca, albahaca y un chorrito de aceite de oliva.',
    imagen: 'https://imgs.search.brave.com/ETvkENHtICqRvj1moFFskSUJtOxo7EvDCxU8K2w-X6E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c3RhdGljYWxseS5p/by9pbWcvbGFtZXNh/ZGVsY29uZGUuZXMv/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDgvUGl6emEtbWFy/Z2hlcml0YS1pbWFn/ZW4tZGUtSWwtQ2Fz/ZXJ0YW5vLmpwZz9x/dWFsaXR5PTEwMCZm/PWF1dG8'
  }
];

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // Usamos un signal para manejar el estado de las recetas de forma reactiva
  private recipesSignal = signal<Receta[]>(DEFAULT_RECIPES);

  // Exponemos el signal como solo lectura
  public recipes = this.recipesSignal.asReadonly();

  constructor() { }

  /**
   * Añade una nueva receta a la lista.
   */
  addRecipe(receta: Omit<Receta, 'id'>) {
    const newRecipe: Receta = {...receta,
      // Generamos un ID simple basado en la fecha
      // esos tres puntos lo que hacen es copiar todas las propiedades del objeto, al nuevo
      id: Date.now() 
    };
    this.recipesSignal.update(currentRecipes => [newRecipe, ...currentRecipes]);
  }
  deleteRecipe(id: number) {
    this.recipesSignal.update(currentRecipes => 
      currentRecipes.filter(receta => receta.id !== id)
    );
  }
}