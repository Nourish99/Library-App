import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CompraComponent } from './components/compra/compra.component';
import { LibroComponent } from './components/libro/libro.component';
import { GaleriaComponent } from './components/galeria/galeria.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Catalogo/:categoria', component: CatalogoComponent },
  { path: 'Galeria', component:GaleriaComponent },
  { path: 'Compra', component: CompraComponent },
  { path: 'Libro', component: LibroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
