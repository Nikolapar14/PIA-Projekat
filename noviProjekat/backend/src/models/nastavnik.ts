import mongoose from 'mongoose'

const Nastavnik = new mongoose.Schema(
    {
        
        
        korisnickoIme: {
            type: String
        },
        lozinka: {
            type: String
        },
        bezbedonosnoPitanje: {
            type: String
        },
        odgovor: {
            type: String
        },
        ime: {
            type: String
        },
        prezime: {
            type: String
        },
        pol: {
            type: String
        },
        adresa: {
            type: String
        },
        kontaktTelefon: {
            type: String
        },
        email: {
            type: String
        },
        profilnaSlika: {
            type: String
        },
        pdf:{
            type: String
        },
        predmeti:{
            type: Array
        },
        drugiPredmet:{
            type: String
        },
        uzrast: {
            type: Array
        },
        izvor: {
            type: String
        }


        

    }
);

export default mongoose.model('Nastavnik',Nastavnik,'nastavnici');