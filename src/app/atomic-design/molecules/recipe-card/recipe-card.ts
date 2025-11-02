import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Receta } from '../../recipe.model';

@Component({
  selector: 'app-ad-recipe-card',
  imports: [CommonModule],
  templateUrl: './recipe-card.html',
})
export class AdRecipeCardComponent {
  @Input() receta!: Receta;
  @Output() onDelete = new EventEmitter<number>();

  onDeleteClick() {
    // Emitimos el ID de la receta que se va a borrar
    this.onDelete.emit(this.receta.id);
  }
}