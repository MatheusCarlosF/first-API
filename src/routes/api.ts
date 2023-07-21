import { Router } from "express";
import * as ApiController from "../controllers/apiController";

const router = Router()

router.get('/ping', ApiController.ping)
router.get('/random', ApiController.random)
router.get('/nome/:nome', ApiController.nome)

router.post('/frases',ApiController.createFrase)
router.get('/frases', ApiController.listFrase)
router.get('/frase/:id', ApiController.getFrase)

export default router