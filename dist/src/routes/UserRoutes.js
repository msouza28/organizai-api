"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controllers/UserController");
const router = express_1.default.Router();
const userController = new UserController_1.UserController();
// a utilizacao de 'as any' é bem zuada, nao sei como resolver de outra forma por enquanto
router.get('/', userController.findAllUsers);
router.get('/byEmail', userController.findUserByEmail);
router.post('/', userController.createUser);
router.post('/isUsuario', userController.autenticacaoUser);
exports.default = router;
