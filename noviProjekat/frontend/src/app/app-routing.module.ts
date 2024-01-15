import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { NastavnikComponent } from './nastavnik/nastavnik.component';
import { UcenikComponent } from './ucenik/ucenik.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"registracija", component: RegistracijaComponent},
  {path:"nastavnik", component: NastavnikComponent},
  {path:"ucenik", component: UcenikComponent},
  {path:"promenaLozinke",component:PromenaLozinkeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
