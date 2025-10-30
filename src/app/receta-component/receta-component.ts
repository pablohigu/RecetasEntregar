import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interfaz para definir la estructura de un objeto Receta.
 */
export interface Receta {
  titulo: string;
  descripcion:string;
  imagen: string;
}

@Component({
  selector: 'app-receta-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receta-component.html',
})
export class RecetaComponent {
  @Input() receta!: Receta;
}