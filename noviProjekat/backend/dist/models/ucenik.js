"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Ucenik = new mongoose_1.default.Schema({
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
});
exports.default = mongoose_1.default.model('Ucenik', Ucenik, 'ucenici');
