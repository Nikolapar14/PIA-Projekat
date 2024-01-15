import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { NastavnikComponent } from './nastavnik/nastavnik.component';
import { UcenikComponent } from './ucenik/ucenik.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistracijaComponent,
    PromenaLozinkeComponent,
    NastavnikComponent,
    UcenikComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
