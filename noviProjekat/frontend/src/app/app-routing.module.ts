import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { NastavnikComponent } from './nastavnik/nastavnik.component';
import { UcenikComponent } from './ucenik/ucenik.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { NeregistrovaniComponent } from './neregistrovani/neregistrovani.component';
import { ZaboravljenaLozinkaComponent } from './zaboravljena-lozinka/zaboravljena-lozinka.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"registracija", component: RegistracijaComponent},
  {path:"nastavnik", component: NastavnikComponent},
  {path:"ucenik", component: UcenikComponent},
  {path:"promenaLozinke",component:PromenaLozinkeComponent},
  {path:"", component:NeregistrovaniComponent},
  {path:"zaboravljena", component:ZaboravljenaLozinkaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
