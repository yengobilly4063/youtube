import express from 'express';
import { sayHello } from '../services/main.service';

const router = express.Router();

router.get('/', sayHello);

export default router;
