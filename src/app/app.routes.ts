import { Routes } from '@angular/router';
import {InicioComponent} from "./paginas/inicio/inicio.component";
import {CarrerasComponent} from "./paginas/carreras/carreras.component";
import {DirectorioComponent} from "./paginas/directorio/directorio.component";

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'carreras',
    component: CarrerasComponent
  },
  {
    path: 'directorio',
    component: DirectorioComponent
  }
];
