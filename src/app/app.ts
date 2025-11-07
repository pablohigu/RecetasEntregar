import { Component } from '@angular/core';
import { AdNavbarComponent } from './atomic-design/organisms/navbar/navbar';
import { AdHomePageComponent } from './atomic-design/pages/home-page/home-page';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AdNavbarComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  // Ya no necesitamos el 'title'
}