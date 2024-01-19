import { Component } from '@angular/core';
import {CarruselComponent} from "../../componentes/carrusel/carrusel.component";
import {PerfilesComponent} from "../../componentes/perfiles/perfiles.component";
import {SeparadorComponent} from "../../componentes/separador/separador.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CarruselComponent,
    PerfilesComponent,
    SeparadorComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
