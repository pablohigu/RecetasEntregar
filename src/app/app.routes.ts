import { Routes } from '@angular/router';
import { AdHomePageComponent } from './atomic-design/pages/home-page/home-page';
import { RecipeAddComponent } from './atomic-design/pages/recipe-add/recipe-add';
import { RecipeDetailComponent } from './atomic-design/pages/recipe-detail/recipe-detail';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'recetas', 
    pathMatch: 'full'
  },
  { 
    path: 'recetas', 
    component: AdHomePageComponent 
  },
  // Nueva ruta dinámica
  { 
    path: 'recetas/:id', 
    component: RecipeDetailComponent 
  },
  { 
    path: 'anadir', 
    component: RecipeAddComponent 
  },
];