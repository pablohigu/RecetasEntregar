import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Receta } from '../../recipe.model';
import { RouterLink } from '@angular/router';
import { AdButtonComponent } from '../../atoms/button/button';

@Component({
  selector: 'app-ad-recipe-card',
  imports: [CommonModule, RouterLink , AdButtonComponent],
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