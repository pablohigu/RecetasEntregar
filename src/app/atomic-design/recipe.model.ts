export interface Receta {
  id: string; 
  titulo: string;
  descripcion: string;
  imagen: string;
  calorias?: number;
  rating: number;
  votos: number;
}