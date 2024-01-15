import { Component,OnInit } from '@angular/core';
import { UcenikServiceService } from '../servisi/ucenik-service.service';
import { Message } from '../models/message';
import { NastavnikService } from '../servisi/nastavnik.service';
import { Router } from '@angular/router';
import { Ucenik } from '../models/ucenik';
import { Nastavnik } from '../models/nastavnik';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private ucenikService: UcenikServiceService, private nastavnikServis: NastavnikService, private router: Router){}

  username: string = "";
  password: string = "";

  poruka: string = ""



  ngOnInit(): void {




  }

  logIn(){

    this.ucenikService.logInUcenik(this.username,this.password).subscribe((kor: Ucenik)=>{
      if(kor){

        localStorage.setItem("ulogovan",JSON.stringify(kor))
        this.router.navigate(['ucenik'])

      }else{

        this.nastavnikServis.logInNastavnik(this.username,this.password).subscribe((nas: Nastavnik) =>{

          if(nas){

            localStorage.setItem("ulogovan",JSON.stringify(nas))
            this.router.navigate(['nastavnik'])

          }else{
            this.poruka = "Korisnik ne postoji"
          }

        })

      }
    })

  }




}
