import { Component, OnInit } from '@angular/core';
import { UcenikServiceService } from '../servisi/ucenik-service.service';
import { NastavnikService } from '../servisi/nastavnik.service';
import { Router } from '@angular/router';
import { Ucenik } from '../models/ucenik';
import { Nastavnik } from '../models/nastavnik';
import { Message } from '../models/message';

@Component({
  selector: 'app-zaboravljena-lozinka',
  templateUrl: './zaboravljena-lozinka.component.html',
  styleUrls: ['./zaboravljena-lozinka.component.css']
})
export class ZaboravljenaLozinkaComponent implements OnInit {

  constructor(private ucenikServis: UcenikServiceService, private nastavnikServis: NastavnikService, private router: Router){}

  korisnickoIme: string = ""
  pitanje: string = ""
  potvrda: boolean = false
  odgovor: string = ""
  netacanOdgovor: boolean = false
  dalje: boolean = false
  staraLozinka: string = ""
  novaLozinka: string = ""
  novaLozinka2: string = ""
  poruka: string = ""

  ucenik: Ucenik = new Ucenik()
  nastavnik:Nastavnik = new Nastavnik()



  ngOnInit(): void {

  }

  potvrdi(){

    this.potvrda = false
    this.dalje = false
    this.netacanOdgovor = false

    this.ucenikServis.nadjiUcenikaUsername(this.korisnickoIme).subscribe((u: Ucenik)=>{

      if(u){

        this.ucenik = u

        this.poruka = ""
        this.potvrda = true

        this.pitanje = this.ucenik.bezbedonosnoPitanje

      }else{
        this.nastavnikServis.nadjiNastavnikaUsername(this.korisnickoIme).subscribe((n: Nastavnik)=>{

          if(n){
            this.poruka = ""
            this.potvrda = true
          }else{
            this.poruka = "Korisnik ne postoji u sistemu"
          }

        })
      }

    })

  }

  proveriOdgovor(){

    this.netacanOdgovor = false
    this.dalje = false

    if(this.korisnickoIme == this.ucenik.korisnickoIme){
      if(this.odgovor == this.ucenik.odgovor){
        this.dalje = true
      }else{
        this.netacanOdgovor = true
      }
    }else{
      if(this.korisnickoIme == this.nastavnik.korisnickoIme){
        if(this.odgovor == this.nastavnik.odgovor){
          this.dalje = true
        }else{
          this.netacanOdgovor = true
        }
      }
    }

  }

  validatePassword(password: string) {
    const regex = /^(?=.*[A-Z])(?=.*[a-z]{3})(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z][A-Za-z\d!@#$%^&*()_+]{5,9}$/;
    return regex.test(password);
  }



  promeniLozinku(){

    if( this.novaLozinka == "" || this.novaLozinka2==""){
      this.poruka = "Popunite sva polja"

    }
    else{

      this.ucenikServis.nadjiUcenikaUsernamePassword(this.korisnickoIme,this.ucenik.lozinka).subscribe((ucenik: Ucenik) =>{

        if(ucenik){

          if(!this.validatePassword(this.novaLozinka)){

            this.poruka = "Format nove lozinke nije odgovarajuci!"

          }else{
            if(this.novaLozinka != this.novaLozinka2){
              this.poruka = "Lozinke se ne poklapaju"
            }else{
              this.ucenikServis.promenaSifre(this.korisnickoIme,this.novaLozinka, this.ucenik.lozinka).subscribe((mes: Message) =>{

                if(mes){



                  alert("Sifra je uspesno promenjena!")
                  this.router.navigate(['login'])
                }

              })
            }
          }




        }else{

          this.nastavnikServis.nadjiNastavnikaUsernamePassword(this.korisnickoIme,this.nastavnik.lozinka).subscribe((nas: Nastavnik) =>{

            if(nas){

              if(!this.validatePassword(this.novaLozinka)){

                this.poruka = "Format nove lozinke nije odgovarajuci!"

              }else{
                if(this.novaLozinka != this.novaLozinka2){
                  this.poruka = "Lozinke se ne poklapaju"
                }else{
                  this.nastavnikServis.promenaSifre(this.korisnickoIme,this.novaLozinka, this.nastavnik.lozinka).subscribe((mes: Message) =>{

                    if(mes){
                      alert("Sifra je uspesno promenjena!")
                      this.router.navigate(['login'])
                    }

                  })
                }
              }

            }else{
              this.poruka = "Pogresno uneti podaci! Proverite korisnicko ime!"
            }

          })

        }

      })

    }






  }



}
