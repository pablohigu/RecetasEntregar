import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receta } from '../recipe.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private http = inject(HttpClient);
  // 🔴 ¡PEGA TU URL DE MOCKAPI AQUÍ!
  private apiUrl = 'https://693473354090fe3bf01ff294.mockapi.io/recipes'; 
  private recipesSignal = signal<Receta[]>([]);
  public recipes = this.recipesSignal.asReadonly();
  constructor() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.http.get<Receta[]>(this.apiUrl).subscribe({
      next: (data) => this.recipesSignal.set(data),
      error: (e) => console.error('API Error:', e)
    });
  }

  addRecipe(receta: Omit<Receta, 'id' | 'rating' | 'votos'>) {
    const newRecipe = { ...receta, rating: 0, votos: 0 };
    this.http.post<Receta>(this.apiUrl, newRecipe).subscribe(() => this.loadRecipes());
  }

  deleteRecipe(id: string) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.recipesSignal.update(list => list.filter(r => r.id !== id));
    });
  }

  getRecipeById(id: string) {
    return this.http.get<Receta>(`${this.apiUrl}/${id}`);
  }

  rateRecipe(id: string, current: Receta, userRating: number) {
    const newVotes = (current.votos || 0) + 1;
    const currentScore = (current.rating || 0) * (current.votos || 0);
    const newRating = (currentScore + userRating) / newVotes;

    const updated = { ...current, rating: newRating, votos: newVotes };

    return this.http.put<Receta>(`${this.apiUrl}/${id}`, updated).pipe(
      tap(() => this.loadRecipes())
    );
  }
}