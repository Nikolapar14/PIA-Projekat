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
      izvor : nastavnik.izvor,
      aktivan: nastavnik.aktivan
    }

    return this.http.post<Message>("http://localhost:4000/nastavnik/register", data)
  }

  logInNastavnik(username: String, password: String){

    const data = {
      username: username,
      password : password
    }
    console.log("Prosao")

    return this.http.post<Nastavnik>("http://localhost:4000/nastavnik/logIn",data)

  }

  nadjiNastavnikaUsernamePassword(username: String, password: String){
    const data = {
      username: username,
      password: password
    }

    return this.http.post<Nastavnik>("http://localhost:4000/nastavnik/nadjiNastavnikaUsernamePassword",data)

  }

  promenaSifre(username: string,password: string, passwordOld: string){

    const data = {
      username:username,
      password: password,
      passwordOld: passwordOld
    }

    return this.http.post<Message>("http://localhost:4000/nastavnik/promenaSifre",data)

  }

  nadjiNastavnikaUsername(username: String){
    const data = {
      username: username
    }

    return this.http.post<Nastavnik>("http://localhost:4000/nastavnik/nadjiNastavnikaUsername",data)

  }

  nadjiNastavnikaEmail(email: string) {

    const data = {
      email : email
    }

    return this.http.post<Message>("http://localhost:4000/nastavnik/nadjiNastavnikaEmail",data)
  }

  dohvatiAktivneNastavnike(){


    return this.http.get<Nastavnik[]>("http://localhost:4000/nastavnik/dohvatiAktivneNastavnike")

  }


}
