import { Component, OnInit } from '@angular/core';
import { UcenikServiceService } from '../servisi/ucenik-service.service';
import { NastavnikService } from '../servisi/nastavnik.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Ucenik } from '../models/ucenik';
import { Nastavnik } from '../models/nastavnik';
import { Message } from '../models/message';

@Component({
  selector: 'app-nastavnik',
  templateUrl: './nastavnik.component.html',
  styleUrls: ['./nastavnik.component.css']
})
export class NastavnikComponent implements OnInit{
  constructor(
    private ucenikServis: UcenikServiceService,
    private nastavnikServis: NastavnikService,
    private sanitizer: DomSanitizer
  ) {
    this.link = this.sanitizer.bypassSecurityTrustUrl('../../assets/rsz_blank-profile-picture-973460_1280.jpg');
  }

  ulogovan: Nastavnik = new Nastavnik();
  link: SafeUrl;

  selectedFile: string | null = null;
  selectedImage:string | null = null;

  imeNovo: string = ""
  prezimeNovo: string = ""
  adresaNova: string = ""
  emailNov: string = ""
  telefonNov: string = ""
  tipSkoleNov: string = ""

  noviPredmeti: string[] = []
  uzrastNovo: string[] = []

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
    if(this.noviPredmeti.length != 0)this.ulogovan.predmeti = this.noviPredmeti
    if(this.uzrastNovo.length != 0)this.ulogovan.uzrast = this.uzrastNovo
    if(this.selectedImage)this.ulogovan.profilnaSlika = this.selectedImage



    this.nastavnikServis.azurirajNastavnika(this.ulogovan).subscribe((msg: Message)=>{
      if(msg){
        alert("Nastavnik uspesno azuriran!")

      }
    })


  }


}
