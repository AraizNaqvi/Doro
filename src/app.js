import express from 'express';
const app = express();

import { JSON_LIMIT } from './constants.js';
app.use(express.urlencoded({extended: true}));
app.use(express.json({limit: JSON_LIMIT}));
app.use(express.static('public'));

export default app;