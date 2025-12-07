import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ad-recipe-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recipe-filter.html'
})
export class RecipeFilterComponent {
  filterChange = output<{search: string, minRating: number}>();
  searchTerm = '';
  minRating = 0;

  emitFilter() {
    this.filterChange.emit({ search: this.searchTerm, minRating: Number(this.minRating) });
  }
}