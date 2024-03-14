import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from '../app/components/inicio/inicio.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
const routes: Routes = [
  
  {path: '', component:InicioComponent},
  {path: 'Inicio', component:InicioComponent},
  {path: '**', component:PageNotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
