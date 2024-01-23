import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ulidev';
  isHome: boolean = false;

  constructor(private router: Router) {
    // Escucha los cambios de navegación
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verifica si estás en la página de inicio
        this.isHome = this.router.url === '/';
        console.log(this.isHome.toString())
      }
    });
  }
}
