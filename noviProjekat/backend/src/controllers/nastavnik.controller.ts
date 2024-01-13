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
            izvor : izvor
            
        }

        new Nastavnik(nastavnik).save().then(ok=>{
            res.json({message: "ok"})
        }).catch(err =>{
            console.log(err)
        })

    }

   


}