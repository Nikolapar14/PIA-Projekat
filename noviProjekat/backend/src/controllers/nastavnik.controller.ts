import express from 'express'
import Nastavnik from '../models/nastavnik'


export class NastavnikController{

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
        let pdf = req.body.pdf
        let predmeti = req.body.predmeti
        let drugiPredmet = req.body.drugiPredmet
        let uzrast = req.body.uzrast
        let izvor = req.body.izvor
        let aktivan = req.body.aktivan
        

        let nastavnik = {
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
            pdf : pdf,
            predmeti : predmeti,
            drugiPredmet : drugiPredmet,
            uzrast : uzrast,
            izvor : izvor,
            aktivan: aktivan
            
        }

        new Nastavnik(nastavnik).save().then(ok=>{
            res.json({message: "ok"})
        }).catch(err =>{
            console.log(err)
        })

    }

    logIn = (req: express.Request, res: express.Response)=>{
        console.log("Usao")
        let username = req.body.username
        let password = req.body.password

         Nastavnik.findOne({"korisnickoIme": username, 
            "lozinka": password}).then((user)=>{
                res.json(user)
                
            }).catch((err)=>{
                console.log(err)
            })
    }


    nadjiNastavnikaUsernamePassword = (req: express.Request, res: express.Response) =>{
        let username = req.body.username
        let password = req.body.password
        
        Nastavnik.findOne({"korisnickoIme": username, "lozinka": password 
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
        
        Nastavnik.findOneAndUpdate({"korisnickoIme": username, "lozinka": passwordOld 
            },{$set: {"lozinka": password}}).then((user)=>{
                
                if(user != null){
                    res.json({"msg": "Prosao"})
                }
                
                
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    nadjiNastavnikaUsername = (req: express.Request, res: express.Response) =>{
        let username = req.body.username
        
        Nastavnik.findOne({"korisnickoIme": username 
            }).then((user)=>{
                res.json(user)
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    nadjiNastavnikaEmail= (req: express.Request, res: express.Response) =>{
        let email = req.body.email
        
        Nastavnik.findOne({"email": email
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

    dohvatiAktivneNastavnike= (req: express.Request, res: express.Response) =>{
        
        
        Nastavnik.find({"aktivan": 1
            }).then((nastavnici)=>{
                res.json(nastavnici)
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    azurirajNastavnika = (req: express.Request, res: express.Response) =>{
        
        let nastavnik = req.body.nastavnik
        
        Nastavnik.findOneAndUpdate({ "korisnickoIme": nastavnik.korisnickoIme
            },{$set: {"ime": nastavnik.ime, "prezime": nastavnik.prezime, "adresa": nastavnik.adresa, "email": nastavnik.email, "kontaktTelefon": nastavnik.kontaktTelefon, "predmeti": nastavnik.predmeti, "profilnaSlika": nastavnik.profilnaSlika, "uzrast": nastavnik.uzrast}}).then((ucenici)=>{
                res.json({"msg": "ok"})
                
            }).catch((err)=>{
                console.log(err)
            })

    }

   


}