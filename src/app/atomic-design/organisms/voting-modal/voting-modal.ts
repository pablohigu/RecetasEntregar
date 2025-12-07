import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Receta } from '../../recipe.model';

@Component({
  selector: 'app-ad-voting-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voting-modal.html',
  styleUrl: './voting-modal.scss'
})
export class VotingModalComponent {
  @Input({required: true}) receta!: Receta;
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<number>();
  
  hover = 0; 
  selected = 0;
}