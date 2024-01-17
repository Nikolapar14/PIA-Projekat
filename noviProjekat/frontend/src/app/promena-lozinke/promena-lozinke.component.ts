import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UcenikServiceService } from '../servisi/ucenik-service.service';
import { NastavnikService } from '../servisi/nastavnik.service';
import { Ucenik } from '../models/ucenik';
import { Nastavnik } from '../models/nastavnik';
import { Message } from '../models/message';

@Component({
  selector: 'app-promena-lozinke',
  templateUrl: './promena-lozinke.component.html',
  styleUrls: ['./promena-lozinke.component.css']
})
export class PromenaLozinkeComponent implements OnInit{

  constructor(private router: Router,private ucenikServis: UcenikServiceService, private nastavnikServis: NastavnikService){}

  korisnickoIme: string = ""
  staraLozinka: string = ""
  novaLozinka: string = ""
  novaLozinka2: string = ""
  poruka: string = ""

  ngOnInit(): void {

  }

  validatePassword(password: string) {
    const regex = /^(?=.*[A-Z])(?=.*[a-z]{3})(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z][A-Za-z\d!@#$%^&*()_+]{5,9}$/;
    return regex.test(password);
  }

  promeniLozinku(){

    if(this.korisnickoIme == "" || this.staraLozinka == "" || this.novaLozinka == "" || this.novaLozinka2==""){
      this.poruka = "Popunite sva polja"

    }
    else{

      this.ucenikServis.nadjiUcenikaUsernamePassword(this.korisnickoIme,this.staraLozinka).subscribe((ucenik: Ucenik) =>{

        if(ucenik){

          if(!this.validatePassword(this.novaLozinka)){

            this.poruka = "Format nove lozinke nije odgovarajuci!"

          }else{
            if(this.novaLozinka != this.novaLozinka2){
              this.poruka = "Lozinke se ne poklapaju"
            }else{
              this.ucenikServis.promenaSifre(this.korisnickoIme,this.novaLozinka, this.staraLozinka).subscribe((mes: Message) =>{

                if(mes){



                  alert("Sifra je uspesno promenjena!")
                  this.router.navigate(['login'])
                }

              })
            }
          }




        }else{

          this.nastavnikServis.nadjiNastavnikaUsernamePassword(this.korisnickoIme,this.staraLozinka).subscribe((nas: Nastavnik) =>{

            if(nas){

              if(!this.validatePassword(this.novaLozinka)){

                this.poruka = "Format nove lozinke nije odgovarajuci!"

              }else{
                if(this.novaLozinka != this.novaLozinka2){
                  this.poruka = "Lozinke se ne poklapaju"
                }else{
                  this.nastavnikServis.promenaSifre(this.korisnickoIme,this.novaLozinka, this.staraLozinka).subscribe((mes: Message) =>{

                    if(mes){
                      alert("Sifra je uspesno promenjena!")
                      this.router.navigate(['login'])
                    }

                  })
                }
              }

            }else{
              this.poruka = "Pogresno uneti podaci! Proverite korisnicko ime i staru lozinku!"
            }

          })

        }

      })

    }






  }

}
