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

export default ucenikRouter