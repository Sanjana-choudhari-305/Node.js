import express from 'express';
import { createService, updateService } from './Services.js';

const router = express.Router();
router.post('/create-a-service/',createService);
router.put('/update-a-service/:id',updateService);

export default router;