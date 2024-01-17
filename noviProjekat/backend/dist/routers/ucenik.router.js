"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ucenik_controller_1 = require("../controllers/ucenik.controller");
const ucenikRouter = express_1.default.Router();
ucenikRouter.route('/register').post((req, res) => new ucenik_controller_1.UcenikController().register(req, res));
ucenikRouter.route('/logIn').post((req, res) => new ucenik_controller_1.UcenikController().logIn(req, res));
ucenikRouter.route('/nadjiUcenikaUsername').post((req, res) => new ucenik_controller_1.UcenikController().nadjiUcenikaUsername(req, res));
ucenikRouter.route('/nadjiUcenikaUsernamePassword').post((req, res) => new ucenik_controller_1.UcenikController().nadjiUcenikaUsernamePassword(req, res));
ucenikRouter.route('/nadjiUcenikaEmail').post((req, res) => new ucenik_controller_1.UcenikController().nadjiUcenikaEmail(req, res));
ucenikRouter.route('/promenaSifre').post((req, res) => new ucenik_controller_1.UcenikController().promenaSifre(req, res));
ucenikRouter.route('/dohvatiUcenike').get((req, res) => new ucenik_controller_1.UcenikController().dohvatiUcenike(req, res));
exports.default = ucenikRouter;
