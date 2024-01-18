import { Component } from '@angular/core';
import {SeparadorComponent} from "../separador/separador.component";

@Component({
  selector: 'app-perfiles',
  standalone: true,
  imports: [
    SeparadorComponent
  ],
  templateUrl: './perfiles.component.html',
  styleUrl: './perfiles.component.css'
})
export class PerfilesComponent {

}
