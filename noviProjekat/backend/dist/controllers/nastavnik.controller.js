"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NastavnikController = void 0;
const nastavnik_1 = __importDefault(require("../models/nastavnik"));
class NastavnikController {
    constructor() {
        this.register = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            let lozinka = req.body.lozinka;
            let bezbedonosnoPitanje = req.body.bezbedonosnoPitanje;
            let odgovor = req.body.odgovor;
            let ime = req.body.ime;
            let prezime = req.body.prezime;
            let pol = req.body.pol;
            let adresa = req.body.adresa;
            let kontaktTelefon = req.body.kontaktTelefon;
            let email = req.body.email;
            let profilnaSlika = req.body.profilnaSlika;
            let pdf = req.body.pdf;
            let predmeti = req.body.predmeti;
            let drugiPredmet = req.body.drugiPredmet;
            let uzrast = req.body.uzrast;
            let izvor = req.body.izvor;
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
                pdf: pdf,
                predmeti: predmeti,
                drugiPredmet: drugiPredmet,
                uzrast: uzrast,
                izvor: izvor
            };
            new nastavnik_1.default(nastavnik).save().then(ok => {
                res.json({ message: "ok" });
            }).catch(err => {
                console.log(err);
            });
        };
    }
}
exports.NastavnikController = NastavnikController;
