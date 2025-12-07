import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ad-rating-stars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-stars.html'
})
export class RatingStarsComponent {
  @Input() rating: number = 0;
  @Input() votes: number = 0;
}