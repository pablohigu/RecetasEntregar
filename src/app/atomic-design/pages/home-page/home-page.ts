import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdHeroComponent } from '../../organisms/hero/hero';
import { AdRecipeFormComponent } from '../../organisms/recipe-form/recipe-form';
import { AdRecipeListComponent } from '../../organisms/recipe-list/recipe-list';
@Component({
  selector: 'app-ad-home-page',
  imports: [
    CommonModule,
    AdHeroComponent,
    AdRecipeListComponent
  ],
  templateUrl: './home-page.html',
})
export class AdHomePageComponent {

}