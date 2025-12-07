import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Receta } from '../../recipe.model';
import { AdButtonComponent } from '../../atoms/button/button';
import { RatingStarsComponent } from '../../atoms/rating-stars/rating-stars';

@Component({
  selector: 'app-ad-recipe-card',
  standalone: true,
  imports: [CommonModule, RouterLink, AdButtonComponent, RatingStarsComponent],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss'
})
export class AdRecipeCardComponent {
  @Input({required: true}) receta!: Receta;
  @Output() deleteRequest = new EventEmitter<string>();
  @Output() voteRequest = new EventEmitter<Receta>();
}