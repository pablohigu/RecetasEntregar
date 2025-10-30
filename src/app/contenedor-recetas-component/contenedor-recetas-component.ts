import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Receta, RecetaComponent } from '../receta-component/receta-component';

@Component({
  selector: 'app-contenedor-recetas-component',
  standalone: true,
  imports: [CommonModule, RecetaComponent],
  templateUrl: './contenedor-recetas-component.html',
})
export class ContenedorRecetasComponent {
  recetas: Receta[] = [
    {
      titulo: 'Paella Valenciana',
      descripcion: 'Un clásico de la cocina española. Perfecta para disfrutar en familia los domingos.',
      imagen: 'https://images.unsplash.com/photo-1598511829623-23b56932a179?q=80&w=2070&auto=format&fit=crop'
    },
    {
      titulo: 'Tacos al Pastor',
      descripcion: 'Deliciosos tacos de cerdo marinado con piña, cilantro y cebolla. Un sabor auténtico de México.',
      imagen: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=2071&auto=format&fit=crop'
    },
    {
      titulo: 'Pizza Margherita',
      descripcion: 'La pizza más icónica y sencilla de Italia, con tomate, mozzarella fresca, albahaca y un chorrito de aceite de oliva.',
      imagen: 'https://images.unsplash.com/photo-1598021680942-8aa3b21f3666?q=80&w=1994&auto=format&fit=crop'
    }
  ];
}
