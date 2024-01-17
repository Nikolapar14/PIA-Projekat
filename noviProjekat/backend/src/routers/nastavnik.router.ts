import express from 'express'
import { NastavnikController } from '../controllers/nastavnik.controller'


const nastavnikRouter = express.Router()

nastavnikRouter.route('/register').post(
    
    (req,res) => new NastavnikController().register(req,res)
)

nastavnikRouter.route('/logIn').post(
    (req,res) => new NastavnikController().logIn(req,res)
)

nastavnikRouter.route('/nadjiNastavnikaUsernamePassword').post(
    (req,res) => new NastavnikController().nadjiNastavnikaUsernamePassword(req,res)
)

nastavnikRouter.route('/promenaSifre').post(
    (req,res) => new NastavnikController().promenaSifre(req,res)
)

nastavnikRouter.route('/nadjiNastavnikaUsername').post(
    (req,res) => new NastavnikController().nadjiNastavnikaUsername(req,res)
)

nastavnikRouter.route('/nadjiNastavnikaEmail').post(
    (req,res) => new NastavnikController().nadjiNastavnikaEmail(req,res)
)

nastavnikRouter.route('/dohvatiAktivneNastavnike').get(
    (req,res) => new NastavnikController().dohvatiAktivneNastavnike(req,res)
)



export default nastavnikRouter