import express from 'express';
import { UserController } from '../controllers/UserController';

const router = express.Router();
const userController = new UserController();

router.get('/', userController.findAllUsers)
router.get('/byEmail', userController.findUserByEmail)
router.post('/', userController.createUser)

export default router;