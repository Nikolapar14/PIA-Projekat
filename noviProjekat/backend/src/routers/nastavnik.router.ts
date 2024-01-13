import express from 'express'
import { NastavnikController } from '../controllers/nastavnik.controller'


const nastavnikRouter = express.Router()

nastavnikRouter.route('/register').post(
    
    (req,res) => new NastavnikController().register(req,res)
)




export default nastavnikRouter