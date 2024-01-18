import { Component, OnInit } from '@angular/core';
import { UcenikServiceService } from '../servisi/ucenik-service.service';
import { NastavnikService } from '../servisi/nastavnik.service';
import { Router } from '@angular/router';
import { Ucenik } from '../models/ucenik';
import { Nastavnik } from '../models/nastavnik';

@Component({
  selector: 'app-neregistrovani',
  templateUrl: './neregistrovani.component.html',
  styleUrls: ['./neregistrovani.component.css']
})
export class NeregistrovaniComponent implements OnInit{

  constructor(private ucenikServis: UcenikServiceService, private nastavnikServis: NastavnikService, private router: Router){}

  ucenici: Ucenik[] = []
  brojUcenika: Number = 0

  nastavnici: Nastavnik[] = []
  brojAktivnihNastavnika : Number = 0

  predmet: string = ""
  predmetPretraga: string = ""

  imeNastavnika: string = ""
  prezimeNastavnika: string = ""

  ngOnInit(): void {

    this.ucenikServis.dohvatiUcenike().subscribe((uce: Ucenik[])=>{
      if(uce){

        this.ucenici = uce
        this.brojUcenika = this.ucenici.length



      }

      this.nastavnikServis.dohvatiAktivneNastavnike().subscribe((nas: Nastavnik[])=>{

        if(nas){

          this.nastavnici = nas
          this.brojAktivnihNastavnika = this.nastavnici.length

        }

      })



    })



  }



}
