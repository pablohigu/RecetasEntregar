import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { AdHeroComponent } from '../../organisms/hero/hero';
import { AdRecipeListComponent } from '../../organisms/recipe-list/recipe-list';
import { RecipeFilterComponent } from '../../organisms/recipe-filter/recipe-filter';
import { VotingModalComponent } from '../../organisms/voting-modal/voting-modal';
import { Receta } from '../../recipe.model';

@Component({
  selector: 'app-ad-home-page',
  standalone: true,
  imports: [CommonModule, AdHeroComponent, AdRecipeListComponent, RecipeFilterComponent, VotingModalComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class AdHomePageComponent {
  private service = inject(RecipeService);
  
  filterState = signal({ search: '', minRating: 0 });
  votingRecipe = signal<Receta | null>(null);

  filteredRecipes = computed(() => {
    const criteria = this.filterState();
    return this.service.recipes().filter(r => {
      const matchText = r.titulo.toLowerCase().includes(criteria.search.toLowerCase());
      const matchRate = r.rating >= criteria.minRating;
      return matchText && matchRate;
    });
  });

  handleFilter(c: { search: string, minRating: number }) { this.filterState.set(c); }
  
  handleDelete(id: string) { 
    if(confirm('¿Borrar?')) this.service.deleteRecipe(id); 
  }
  
  handleVote(rating: number) {
    const r = this.votingRecipe();
    if (r) {
      this.service.rateRecipe(r.id, r, rating).subscribe(() => this.votingRecipe.set(null));
    }
  }
}