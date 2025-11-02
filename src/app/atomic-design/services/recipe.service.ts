import { Injectable, signal } from '@angular/core';
import { Receta } from '../recipe.model';

// Datos iniciales
const DEFAULT_RECIPES: Receta[] = [
  {
    id: 1,
    titulo: 'Paella Valenciana',
    descripcion: 'Un clásico de la cocina española. Perfecta para disfrutar en familia los domingos.',
    imagen: 'https://images.unsplash.com/photo-1598511829623-23b56932a179?q=80&w=2070&auto=format&fit=crop'
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
    imagen: 'https://images.unsplash.com/photo-1598021680942-8aa3b21f3666?q=80&w=1994&auto=format&fit=crop'
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
    const newRecipe: Receta = {
      ...receta,
      // Generamos un ID simple basado en la fecha
      id: Date.now() 
    };
    
    // Actualizamos el signal con la nueva lista
    this.recipesSignal.update(currentRecipes => [newRecipe, ...currentRecipes]);
  }

  /**
   * Borra una receta de la lista por su ID.
   */
  deleteRecipe(id: number) {
    this.recipesSignal.update(currentRecipes => 
      currentRecipes.filter(receta => receta.id !== id)
    );
  }
}