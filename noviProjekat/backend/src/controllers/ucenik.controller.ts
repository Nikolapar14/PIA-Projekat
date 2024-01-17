import express from 'express'
import Ucenik from '../models/ucenik'


export class UcenikController{

    register = (req: express.Request, res: express.Response)=>{
        let korisnickoIme = req.body.korisnickoIme
        let lozinka = req.body.lozinka
        let bezbedonosnoPitanje = req.body.bezbedonosnoPitanje
        let odgovor = req.body.odgovor
        let ime = req.body.ime
        let prezime = req.body.prezime
        let pol = req.body.pol
        let adresa = req.body.adresa
        let kontaktTelefon = req.body.kontaktTelefon
        let email = req.body.email
        let profilnaSlika = req.body.profilnaSlika
        let tipSkole = req.body.tipSkole
        let razred = req.body.razred

        let ucenik = {
            korisnickoIme: korisnickoIme,
            lozinka: lozinka,
            bezbedonosnoPitanje: bezbedonosnoPitanje,
            odgovor: odgovor,
            ime: ime,
            prezime: prezime,
            pol: pol,
            adresa: adresa,
            kontaktTelefon: kontaktTelefon,
            email: email,
            profilnaSlika: profilnaSlika,
            tipSkole: tipSkole,
            razred: razred
        }

        new Ucenik(ucenik).save().then(ok=>{
            res.json({message: "ok"})
        }).catch(err =>{
            console.log(err)
        })

    }

    logIn = (req: express.Request, res: express.Response)=>{
        console.log("Usao")
        let username = req.body.username
        let password = req.body.password

         Ucenik.findOne({"korisnickoIme": username, 
            "lozinka": password}).then((user)=>{
                res.json(user)
                
            }).catch((err)=>{
                console.log(err)
            })
    }

    nadjiUcenikaUsername = (req: express.Request, res: express.Response) =>{
        let username = req.body.username
        
        Ucenik.findOne({"korisnickoIme": username 
            }).then((user)=>{
                res.json(user)
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    nadjiUcenikaUsernamePassword = (req: express.Request, res: express.Response) =>{
        let username = req.body.username
        let password = req.body.password
        
        Ucenik.findOne({"korisnickoIme": username, "lozinka": password 
            }).then((user)=>{
                res.json(user)
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    promenaSifre = (req: express.Request, res: express.Response) =>{
        let username = req.body.username
        let password = req.body.password
        let passwordOld = req.body.passwordOld
        
        Ucenik.findOneAndUpdate({"korisnickoIme": username, "lozinka": passwordOld 
            },{$set: {"lozinka": password}}).then((user)=>{
                
                if(user != null){
                    res.json({"msg": "Prosao"})
                }
                
                
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    nadjiUcenikaEmail= (req: express.Request, res: express.Response) =>{
        let email = req.body.email
        
        Ucenik.findOne({"email": email
            }).then((user)=>{
                if(user != null){
                    res.json({"message" : "ok"})
                }else{
                    res.json({"message" : "nije ok"})
                }
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    dohvatiUcenike = (req: express.Request, res: express.Response) =>{
        
        
        Ucenik.find({
            }).then((ucenici)=>{
                res.json(ucenici)
                
            }).catch((err)=>{
                console.log(err)
            })

    }


}