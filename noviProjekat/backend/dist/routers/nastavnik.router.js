"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nastavnik_controller_1 = require("../controllers/nastavnik.controller");
const nastavnikRouter = express_1.default.Router();
nastavnikRouter.route('/register').post((req, res) => new nastavnik_controller_1.NastavnikController().register(req, res));
nastavnikRouter.route('/logIn').post((req, res) => new nastavnik_controller_1.NastavnikController().logIn(req, res));
nastavnikRouter.route('/nadjiNastavnikaUsernamePassword').post((req, res) => new nastavnik_controller_1.NastavnikController().nadjiNastavnikaUsernamePassword(req, res));
nastavnikRouter.route('/promenaSifre').post((req, res) => new nastavnik_controller_1.NastavnikController().promenaSifre(req, res));
exports.default = nastavnikRouter;
