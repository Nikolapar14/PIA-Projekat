import mongoose from 'mongoose'

const Ucenik = new mongoose.Schema(
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
        tipSkole: {
            type: String
        },
        razred: {
            type: Number
        }


    }
);

export default mongoose.model('Ucenik',Ucenik,'ucenici');