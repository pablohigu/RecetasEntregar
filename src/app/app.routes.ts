import { Routes } from '@angular/router';
import { AdHomePageComponent } from './atomic-design/pages/home-page/home-page';
import { RecipeAddComponent } from './atomic-design/pages/recipe-add/recipe-add';

export const routes: Routes = [
  // Redirección por defecto
  { 
    path: '', 
    redirectTo: 'recetas', 
    pathMatch: 'full'
  },
  
  // Ruta para la página de inicio (Hero + Lista)
  { 
    path: 'recetas', 
    component: AdHomePageComponent 
  },
  
  // Ruta para la página de añadir receta (Formulario)
  { 
    path: 'anadir', 
    component: RecipeAddComponent 
  },
];