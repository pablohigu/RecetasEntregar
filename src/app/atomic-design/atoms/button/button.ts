import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ad-button',
  standalone: true,
  imports: [], 
  templateUrl: './button.html',
})
export class AdButtonComponent {

  // Define si el botón es de tipo 'button' (normal) o 'submit' (para enviar formularios).
  // Si no le pasas nada, por defecto será 'button'.
  @Input() type: 'button' | 'submit' = 'button';

  // Define el estilo visual. Aquí restringimos los valores a estos strings específicos.
  // Esto nos permite usar <app-ad-button variant="danger">
  @Input() variant: 'primary' | 'danger' | 'outline-danger' | 'outline-secondary' = 'primary';

  // Un booleano (true/false) para desactivar el botón (ponerlo gris y que no se pueda clicar).
  @Input() disabled = false;

  // Si es true, el botón ocupará el 100% del ancho (w-100). Si es false, tendrá tamaño normal.
  @Input() fullWidth = false;

  // Esto permite que el componente padre se entere cuando hacen click en este botón.
  // Es lo que te permite poner (onClick)="miFuncion()" en el HTML del padre.
  @Output() onClick = new EventEmitter<Event>();

  // Esta función calcula qué clases de CSS (Bootstrap) debe tener el botón
  // basándose en los @Inputs que hemos recibido arriba.
  getClasses(): string {
    // Clases base que siempre tiene el botón (btn de bootstrap y negrita)
    const base = 'btn fw-bold';
    
    // Si fullWidth es true, añadimos clase de ancho total y padding vertical
    const width = this.fullWidth ? 'w-100 py-2' : '';
    
    // Lógica para redondear: Si es un botón de borde (outline), lo hacemos pequeño y muy redondo.
    // Si es sólido, lo hacemos redondo normal y con padding horizontal (px-4).
    const rounded = this.variant.includes('outline') ? 'btn-sm rounded-pill' : 'rounded-pill px-4';
    
    // Un "diccionario" para traducir nuestros nombres de variante a clases de Bootstrap reales
    const variantClasses: { [key: string]: string } = {
      'primary': 'btn-primary',        
      'danger': 'btn-danger',           
      'outline-danger': 'btn-outline-danger', 
      'outline-secondary': 'btn-outline-secondary' 
    };

    // Devolvemos toda la cadena de texto unida
    // Ejemplo resultado: "btn fw-bold btn-primary w-100 py-2 rounded-pill px-4"
    return `${base} ${variantClasses[this.variant] || 'btn-primary'} ${width} ${rounded}`;
  }
}