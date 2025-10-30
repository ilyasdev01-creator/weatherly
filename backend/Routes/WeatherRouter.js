import express from 'express';
import { weatherApp } from '../controllers/WeatherController.js';
const router = express.Router();

router.post('/getWeather', weatherApp);

export default router;