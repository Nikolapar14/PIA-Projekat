import { Injectable } from '@angular/core';
import { Ucenik } from '../models/ucenik';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class UcenikServiceService {


  constructor(private http: HttpClient) { }

  registracijaUcenik(ucenik: Ucenik){

    const data = {
        korisnickoIme: ucenik.korisnickoIme,
        lozinka: ucenik.lozinka,
        bezbedonosnoPitanje: ucenik.bezbedonosnoPitanje,
        odgovor: ucenik.odgovor,
        ime: ucenik.ime,
        prezime: ucenik.prezime,
        pol: ucenik.pol,
        adresa: ucenik.adresa,
        kontaktTelefon: ucenik.kontaktTelefon,
        email: ucenik.email,
        profilnaSlika: ucenik.profilnaSlika,
        tipSkole: ucenik.tipSkole,
        razred: ucenik.razred
    }

    return this.http.post<Message>("http://localhost:4000/ucenik/register",ucenik)
  }

  logInUcenik(username: String, password: String){

    const data = {
      username: username,
      password : password
    }
    console.log("Prosao")

    return this.http.post<Message>("http://localhost:4000/ucenik/logIn",data)

  }

  nadjiUcenikaUsername(username: String){
    const data = {
      username: username
    }

    return this.http.post<Message>("http://localhost:4000/ucenik/nadjiUcenikaUsername",data)

  }

  nadjiUcenikaEmail(email: string) {

    const data = {
      email : email
    }

    return this.http.post<Message>("http://localhost:4000/ucenik/nadjiUcenikaEmail",data)
  }

}