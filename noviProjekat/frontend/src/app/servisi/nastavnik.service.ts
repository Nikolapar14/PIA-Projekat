import { Injectable } from '@angular/core';
import { Nastavnik } from '../models/nastavnik';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class NastavnikService {

  constructor(private http: HttpClient) { }


  registrujNastavnika(nastavnik: Nastavnik) {

    const data = {
      korisnickoIme: nastavnik.korisnickoIme,
      ime: nastavnik.ime,
      prezime: nastavnik.prezime,
      lozinka: nastavnik.lozinka,
      odgovor: nastavnik.odgovor,
      adresa : nastavnik.adresa,
      kontaktTelefon : nastavnik.kontaktTelefon,
      email: nastavnik.email,
      bezbednosnoPitanje : nastavnik.bezbedonosnoPitanje,
      pol : nastavnik.pol,
      profilnaSlika : nastavnik.profilnaSlika,
      pdf : nastavnik.pdf,
      predmeti : nastavnik.predmeti,
      drugiPredmet : nastavnik.drugiPredmet,
      uzrast : nastavnik.uzrast,
      izvor : nastavnik.izvor
    }

    return this.http.post<Message>("http://localhost:4000/nastavnik/register", data)
  }


}
