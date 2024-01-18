import { Component, OnInit } from '@angular/core';
import { Ucenik } from '../models/ucenik';
import { UcenikServiceService } from '../servisi/ucenik-service.service';
import { Nastavnik } from '../models/nastavnik';
import { NastavnikService } from '../servisi/nastavnik.service';
import { Message } from '../models/message';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit{

  constructor(private ucenikServis: UcenikServiceService, private nastavnikServis: NastavnikService){}

  selectedFile: string | null = null;
  selectedImage:string | null = null;
  tipKorisnika: string = ""
  ispisiUcenika: boolean = false
  ispisiNastavnika: boolean = false
  tipSkole: string = ""
  ispisiOsnovnu: boolean = false
  ispisiSrednju: boolean = false
  razred: string = ""
  formatLozinkaGreska: boolean = false

  greska1 : boolean = false
  greska2 : boolean = false
  greska3 : boolean = false
  greska4 : boolean = false
  greska5 : boolean = false
  greska6 : boolean = false

  greskaNastavnik1: boolean = false
  greskaNastavnik2 : boolean = false
  greskaNastavnikPDF : boolean = false

  daljeNastavnik: boolean = false



  ucenik: Ucenik = new Ucenik()
  nastavnik: Nastavnik = new Nastavnik()

  ngOnInit(): void {
    this.selectedImage = null
    this.tipKorisnika = ""
    this.tipSkole = ""
    this.ispisiOsnovnu = false
    this.ispisiSrednju = false
    this.razred = ""
    this.formatLozinkaGreska = false

    this.greska1  = false
    this.greska2  = false
    this.greska3 = false
    this.greska4  = false
    this.greska5   = false
    this.greska6  = false

    this.ucenik.korisnickoIme = ""
    this.ucenik.ime = ""
    this.ucenik.prezime = ""
    this.ucenik.lozinka = ""
    this.ucenik.odgovor = ""
    this.ucenik.adresa = ""
    this.ucenik.kontaktTelefon = ""
    this.ucenik.email = ""
    this.ucenik.bezbedonosnoPitanje = ""
    this.ucenik.pol = ""
    this.ucenik.profilnaSlika = null
    this.ucenik.tipSkole = ""
    this.ucenik.razred = 0

    this.nastavnik.korisnickoIme = ""
    this.nastavnik.ime = ""
    this.nastavnik.prezime = ""
    this.nastavnik.lozinka = ""
    this.nastavnik.odgovor = ""
    this.nastavnik.adresa = ""
    this.nastavnik.kontaktTelefon = ""
    this.nastavnik.email = ""
    this.nastavnik.bezbedonosnoPitanje = ""
    this.nastavnik.pol = ""
    this.nastavnik.profilnaSlika = null
    this.nastavnik.pdf = null
    this.nastavnik.predmeti = []
    this.nastavnik.drugiPredmet = ""
    this.nastavnik.uzrast = []
    this.nastavnik.izvor = ""

    this.greskaNastavnik1 = false
    this.greskaNastavnik2 = false
    this.greskaNastavnikPDF =false

    this.daljeNastavnik = false


  }

  onFileSelectedPDF(event: any): void {
    const fileInput = event.target;
  const file = (fileInput.files as FileList)[0];

  if (file) {
    // You can add additional logic here, such as validating the file type and size

    const reader = new FileReader();

    reader.onload = () => {
      // Convert the result to a string
      this.selectedFile = reader.result as string;
    };

    reader.readAsDataURL(file);
  }
  }



  onFileSelected(event: any): void {
    const fileInput = event.target;
    const file = (fileInput.files as FileList)[0];

    if (file) {
      // You can add additional logic here, such as validating the file type and size

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.selectedImage = reader.result as string;
      };
    }
  }

  izaberi(){
      if(this.tipKorisnika == 'ucenik'){
        this.ispisiUcenika = true
        this.ispisiNastavnika = false
        this.ngOnInit()

      }
      else if(this.tipKorisnika == 'nastavnik'){
        this.ispisiUcenika = false
        this.ispisiNastavnika = true
        this.ngOnInit()

      }
  }

  dalje(){
    if(this.tipSkole == 'osnovna'){
      this.ispisiOsnovnu = true
      this.ispisiSrednju = false


    }
    else if(this.tipSkole == 'srednja-gimnazija' || this.tipSkole == 'srednja-strucna' || this.tipSkole == 'srednja-umetnicka' ){
      this.ispisiOsnovnu = false
      this.ispisiSrednju = true


    }
  }



 validatePassword(password: string) {
  const regex = /^(?=.*[A-Z])(?=.*[a-z]{3})(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z][A-Za-z\d!@#$%^&*()_+]{5,9}$/;
  return regex.test(password);
}

  submit(){

    this.ucenik.profilnaSlika = this.selectedImage
    this.ucenik.razred = parseInt(this.razred,10)
    this.ucenik.tipSkole = this.tipSkole

    if(this.ucenik.korisnickoIme == "" || this.ucenik.ime == "" || this.ucenik.prezime == ""|| this.ucenik.lozinka == "" || this.ucenik.odgovor == "" || this.ucenik.adresa == "" || this.ucenik.kontaktTelefon == "" || this.ucenik.email == ""){
      this.greska1 = true
      this.greska2 = false
      this.greska3 = false
      this.greska4 = false
      this.greska5 = false
      this.greska6 = false
      this.formatLozinkaGreska = false
    }else if( this.ucenik.bezbedonosnoPitanje == ""){

      this.greska1 = false
      this.greska2 = true
      this.greska3 = false
      this.greska4 = false
      this.greska5 = false
      this.greska6 = false
      this.formatLozinkaGreska = false

    }else if(this.ucenik.pol == ""){
      this.greska1 = false
      this.greska2 = false
      this.greska3 = true
      this.greska4 = false
      this.greska5 = false
      this.greska6 = false
      this.formatLozinkaGreska = false

    }else if(this.ucenik.profilnaSlika == null){
      this.greska1 = false
      this.greska2 = false
      this.greska3 = false
      this.greska4 = true
      this.greska5 = false
      this.greska6 = false
      this.formatLozinkaGreska = false
    }else if(this.ucenik.tipSkole == ""){
      this.greska1 = false
      this.greska2 = false
      this.greska3 = false
      this.greska4 = false
      this.greska5 = true
      this.greska6 = false
      this.formatLozinkaGreska = false
    }else if(this.ucenik.razred == 0){
      this.greska1 = false
      this.greska2 = false
      this.greska3 = false
      this.greska4 = false
      this.greska5 = false
      this.greska6 = true
      this.formatLozinkaGreska = false
    }else if(!this.validatePassword(this.ucenik.lozinka)){
      this.greska1 = false
      this.greska2 = false
      this.greska3 = false
      this.greska4 = false
      this.greska5 = false
      this.greska6 = false
      this.formatLozinkaGreska = true
    }
    else{
      this.greska1 = false
      this.greska2 = false
      this.greska3 = false
      this.greska4 = false
      this.greska5 = false
      this.greska6 = false
      this.formatLozinkaGreska = false
      this.ucenikServis.nadjiUcenikaUsername(this.ucenik.korisnickoIme).subscribe(
        (data: Ucenik)=>{
          if(data) alert("Ucenik sa unetim korisnicim imenom vec postoji u sistemu!")
          else{
            this.ucenikServis.nadjiUcenikaEmail(this.ucenik.email).subscribe(
              data=>{
                if(data.message == 'ok')alert("Ucenik sa unetim email-om vec postoji u sistemu!")
                else{
                  this.ucenikServis.registracijaUcenik(this.ucenik).subscribe(
                    data=>{
                      if(data.message == "ok") alert("Ucenik je uspesno dodat")
                      else alert("Ucenik nije dodat")
                    }
                  )
              }
              }
            )

          }
        }
      )

    }






  }

  daljeNastavnik1(){

    this.daljeNastavnik = true

  }



  submitNastavnik(){
    this.nastavnik.profilnaSlika = this.selectedImage
    this.nastavnik.pdf = this.selectedFile
    this.ucenik.razred = parseInt(this.razred,10)

    if(this.nastavnik.korisnickoIme == "" || this.nastavnik.ime == "" || this.nastavnik.prezime == ""|| this.nastavnik.lozinka == "" || this.nastavnik.odgovor == "" || this.nastavnik.adresa == "" || this.nastavnik.kontaktTelefon == "" || this.nastavnik.email == ""){
      this.greska1 = true
      this.greska2 = false
      this.greska3 = false
      this.greska4 = false

      this.greskaNastavnik1 = false
      this.greskaNastavnik2 = false

      this.formatLozinkaGreska = false
    }else if( this.nastavnik.bezbedonosnoPitanje == ""){

      this.greska1 = false
      this.greska2 = true
      this.greska3 = false
      this.greska4 = false

      this.greskaNastavnik1 = false
      this.greskaNastavnik2 = false

      this.formatLozinkaGreska = false

    }else if(this.nastavnik.pol == ""){
      this.greska1 = false
      this.greska2 = false
      this.greska3 = true
      this.greska4 = false

      this.greskaNastavnik1 = false
      this.greskaNastavnik2 = false

      this.formatLozinkaGreska = false

    }else if(this.nastavnik.profilnaSlika == null){
      this.greska1 = false
      this.greska2 = false
      this.greska3 = false
      this.greska4 = true

      this.greskaNastavnik1 = false
      this.greskaNastavnik2 = false

      this.formatLozinkaGreska = false
    }
    else if(this.nastavnik.predmeti.length == 0){
      this.greska1 = false
      this.greska2 = false
      this.greska3 = false
      this.greska4 = false

      this.greskaNastavnik1 = true
      this.greskaNastavnik2 = false

      this.formatLozinkaGreska = false
    }
    else if(this.nastavnik.uzrast.length == 0){
      this.greska1 = false
      this.greska2 = false
      this.greska3 = false
      this.greska4 = false

      this.greskaNastavnik1 = false
      this.greskaNastavnik2 = true

      this.formatLozinkaGreska = false
    }
    else if(!this.validatePassword(this.nastavnik.lozinka)){
      this.greska1 = false
      this.greska2 = false
      this.greska3 = false
      this.greska4 = false

      this.greskaNastavnik1 = false
      this.greskaNastavnik2 = false

      this.formatLozinkaGreska = true
    }else{
      this.greska1 = false
      this.greska2 = false
      this.greska3 = false
      this.greska4 = false

      this.greskaNastavnik1 = false
      this.greskaNastavnik2 = false

      this.formatLozinkaGreska = false

      this.nastavnik.aktivan = 0

      this.nastavnikServis.nadjiNastavnikaUsername(this.nastavnik.korisnickoIme).subscribe(
        (data: Nastavnik)=>{
          if(data) alert("Nastavnik sa unetim korisnickim imenom vec postoji u sistemu!")
          else{
            this.nastavnikServis.nadjiNastavnikaEmail(this.nastavnik.email).subscribe(
              (data: Message)=>{
                if(data.message == 'ok')alert("Nastavnik sa unetim email-om vec postoji u sistemu!")
                else{
                  this.nastavnikServis.registrujNastavnika(this.nastavnik).subscribe(
                    data=>{
                      if(data.message == "ok") alert("Nastavnik je uspesno dodat")
                      else alert("Ucenik nije dodat")
                    }
                  )
              }
              }
            )

          }
        }
      )

    }

  }

}
