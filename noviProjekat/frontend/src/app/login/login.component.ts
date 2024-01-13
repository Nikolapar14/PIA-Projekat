import { Component,OnInit } from '@angular/core';
import { UcenikServiceService } from '../servisi/ucenik-service.service';
import { Message } from '../models/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private ucenikService: UcenikServiceService){}

  username: String = "";
  password: String = "";



  ngOnInit(): void {



  }

  logIn(){
    console.log("Ispis")
    this.ucenikService.logInUcenik(this.username,this.password).subscribe(
      (data)=>{
        if(data.message=="ok") alert("Ucenik je uspesno dodat!")
        else alert("Ucenik nije dodat")
      }
    )
  }




}
