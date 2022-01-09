import { FavoritosPage } from './pages/favoritos/favoritos.page';
import { HomePage } from './pages/home/home.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'favoritos', component: FavoritosPage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
