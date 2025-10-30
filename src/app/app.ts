import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar-component/navbar-component';
import { ContenedorRecetasComponent } from "./contenedor-recetas-component/contenedor-recetas-component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, ContenedorRecetasComponent],
  templateUrl: './app.html',
  standalone: true,
})
export class App {
  protected readonly title = signal('RecetasEntregar');
}
