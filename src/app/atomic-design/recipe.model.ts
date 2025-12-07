export interface Receta {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  calorias: number;      // Ahora obligatorio
  ingredientes: string[]; // Nuevo array para ingredientes
  rating: number;
  votos: number;
}