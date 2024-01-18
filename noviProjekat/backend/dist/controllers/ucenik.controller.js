"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UcenikController = void 0;
const ucenik_1 = __importDefault(require("../models/ucenik"));
class UcenikController {
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
            let tipSkole = req.body.tipSkole;
            let razred = req.body.razred;
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
            };
            new ucenik_1.default(ucenik).save().then(ok => {
                res.json({ message: "ok" });
            }).catch(err => {
                console.log(err);
            });
        };
        this.logIn = (req, res) => {
            console.log("Usao");
            let username = req.body.username;
            let password = req.body.password;
            ucenik_1.default.findOne({ "korisnickoIme": username,
                "lozinka": password }).then((user) => {
                res.json(user);
            }).catch((err) => {
                console.log(err);
            });
        };
        this.nadjiUcenikaUsername = (req, res) => {
            let username = req.body.username;
            ucenik_1.default.findOne({ "korisnickoIme": username
            }).then((user) => {
                res.json(user);
            }).catch((err) => {
                console.log(err);
            });
        };
        this.nadjiUcenikaUsernamePassword = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            ucenik_1.default.findOne({ "korisnickoIme": username, "lozinka": password
            }).then((user) => {
                res.json(user);
            }).catch((err) => {
                console.log(err);
            });
        };
        this.promenaSifre = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            let passwordOld = req.body.passwordOld;
            ucenik_1.default.findOneAndUpdate({ "korisnickoIme": username, "lozinka": passwordOld
            }, { $set: { "lozinka": password } }).then((user) => {
                if (user != null) {
                    res.json({ "msg": "Prosao" });
                }
            }).catch((err) => {
                console.log(err);
            });
        };
        this.nadjiUcenikaEmail = (req, res) => {
            let email = req.body.email;
            ucenik_1.default.findOne({ "email": email
            }).then((user) => {
                if (user != null) {
                    res.json({ "message": "ok" });
                }
                else {
                    res.json({ "message": "nije ok" });
                }
            }).catch((err) => {
                console.log(err);
            });
        };
        this.dohvatiUcenike = (req, res) => {
            ucenik_1.default.find({}).then((ucenici) => {
                res.json(ucenici);
            }).catch((err) => {
                console.log(err);
            });
        };
        this.azurirajUcenika = (req, res) => {
            let ucenik = req.body.ucenik;
            ucenik_1.default.findOneAndUpdate({ "korisnickoIme": ucenik.korisnickoIme
            }, { $set: { "ime": ucenik.ime, "prezime": ucenik.prezime, "adresa": ucenik.adresa, "email": ucenik.email, "kontaktTelefon": ucenik.kontaktTelefon, "tipSkole": ucenik.tipSkole, "profilnaSlika": ucenik.profilnaSlika, "razred": ucenik.razred } }).then((ucenici) => {
                res.json({ "msg": "ok" });
            }).catch((err) => {
                console.log(err);
            });
        };
        this.azurirajRazred = (req, res) => {
            let username = req.body.korisnickoIme;
            let razred = req.body.razred;
            ucenik_1.default.findOneAndUpdate({ "korisnickoIme": username
            }, { $set: { "razred": razred } }).then((ucenici) => {
                res.json({ "msg": "ok" });
            }).catch((err) => {
                console.log(err);
            });
        };
    }
}
exports.UcenikController = UcenikController;
