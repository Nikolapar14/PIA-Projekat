import { Component, OnInit } from '@angular/core';
import { NastavnikService } from '../servisi/nastavnik.service';
import { UcenikServiceService } from '../servisi/ucenik-service.service';
import { Ucenik } from '../models/ucenik';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Message } from '../models/message';

@Component({
  selector: 'app-ucenik',
  templateUrl: './ucenik.component.html',
  styleUrls: ['./ucenik.component.css']
})
export class UcenikComponent implements OnInit {
  constructor(
    private ucenikServis: UcenikServiceService,
    private nastavnikServis: NastavnikService,
    private sanitizer: DomSanitizer
  ) {
    this.link = this.sanitizer.bypassSecurityTrustUrl('../../assets/rsz_blank-profile-picture-973460_1280.jpg');
  }

  ulogovan: Ucenik = new Ucenik();
  link: SafeUrl;

  selectedFile: string | null = null;
  selectedImage:string | null = null;

  imeNovo: string = ""
  prezimeNovo: string = ""
  adresaNova: string = ""
  emailNov: string = ""
  telefonNov: string = ""
  tipSkoleNov: string = ""

  ngOnInit(): void {
    let korisnik = localStorage.getItem('ulogovan');
    if (korisnik != null) this.ulogovan = JSON.parse(korisnik);

    if (this.ulogovan.profilnaSlika != null) {
      const blob = this.decodeDataURL(this.ulogovan.profilnaSlika);
      this.link = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
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

  decodeDataURL(dataURL: string): Blob {
    const parts = dataURL.split(',');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }

  azuriraj(){

    if(this.imeNovo != "")this.ulogovan.ime = this.imeNovo
    if(this.prezimeNovo != "")this.ulogovan.prezime = this.prezimeNovo
    if(this.emailNov != "")this.ulogovan.email = this.emailNov
    if(this.adresaNova != "")this.ulogovan.adresa = this.adresaNova
    if(this.telefonNov != "")this.ulogovan.kontaktTelefon = this.telefonNov
    if(this.tipSkoleNov != ""){
      if(this.ulogovan.tipSkole != this.tipSkoleNov){
        this.ulogovan.razred = 1
      }
      this.ulogovan.tipSkole = this.tipSkoleNov
    }
    if(this.selectedImage)this.ulogovan.profilnaSlika = this.selectedImage



    this.ucenikServis.azurirajUcenika(this.ulogovan).subscribe((msg: Message)=>{
      if(msg){
        alert("Ucenik uspesno azuriran!")


      }
    })


  }

  azurirajRazred(){

    if(this.ulogovan.tipSkole== "osnovna" && this.ulogovan.razred<8){

      this.ulogovan.razred = this.ulogovan.razred + 1

      this.ucenikServis.azurirajRazred(this.ulogovan.korisnickoIme, this.ulogovan.razred).subscribe((msg: Message)=>{
        if(msg){

        }
      })

    }
    else if(this.ulogovan.tipSkole== "srednja-gimnazija" || this.ulogovan.tipSkole == "srednja-strucna" || this.ulogovan.tipSkole == "srednja-umetnicka"){
      if(this.ulogovan.razred < 4){
        this.ulogovan.razred = this.ulogovan.razred + 1

      this.ucenikServis.azurirajRazred(this.ulogovan.korisnickoIme, this.ulogovan.razred).subscribe((msg: Message)=>{
        if(msg){
          alert("Uspesno azuriran razred!")
        }
      })
      }
    }

  }


}
