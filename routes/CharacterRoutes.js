import { Router } from "express";
import express from 'express';

import { saveCharacters, getCharacters } from "../controllers/CharacterController.js";

const router = Router();

router.use(express.json());

router.post('/', saveCharacters);

router.get('/', getCharacters);

export default router;