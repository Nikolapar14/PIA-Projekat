import express from 'express'
import { UcenikController } from '../controllers/ucenik.controller'


const ucenikRouter = express.Router()

ucenikRouter.route('/register').post(
    
    (req,res) => new UcenikController().register(req,res)
)

ucenikRouter.route('/logIn').post(
    (req,res) => new UcenikController().logIn(req,res)
)

ucenikRouter.route('/nadjiUcenikaUsername').post(
    (req,res) => new UcenikController().nadjiUcenikaUsername(req,res)
)

ucenikRouter.route('/nadjiUcenikaUsernamePassword').post(
    (req,res) => new UcenikController().nadjiUcenikaUsernamePassword(req,res)
)

ucenikRouter.route('/nadjiUcenikaEmail').post(
    (req,res) => new UcenikController().nadjiUcenikaEmail(req,res)
)

ucenikRouter.route('/promenaSifre').post(
    (req,res) => new UcenikController().promenaSifre(req,res)
)

ucenikRouter.route('/dohvatiUcenike').get(
    (req,res) => new UcenikController().dohvatiUcenike(req,res)
)

ucenikRouter.route('/azurirajUcenika').post(
    (req,res) => new UcenikController().azurirajUcenika(req,res)
)

ucenikRouter.route('/azurirajRazred').post(
    (req,res) => new UcenikController().azurirajRazred(req,res)
)

export default ucenikRouter