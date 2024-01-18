import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {BarraNavegacionComponent} from "./componentes/barra-navegacion/barra-navegacion.component";
import {CarruselComponent} from "./componentes/carrusel/carrusel.component";
import {PerfilesComponent} from "./componentes/perfiles/perfiles.component";
import {SeparadorComponent} from "./componentes/separador/separador.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BarraNavegacionComponent, CarruselComponent, PerfilesComponent, SeparadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = ""
}



