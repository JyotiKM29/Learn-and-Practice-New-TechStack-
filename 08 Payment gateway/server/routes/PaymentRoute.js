import express from 'express';
import { checkout } from '../controller/paymentController.js';
const router = express.Router();

router.route('/checkout').post(checkout);

export default router;