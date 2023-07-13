import { Request, Response } from "express";
import { Frase } from "../models/Frase";

export const ping = (req: Request, res: Response) => {
    res.json({pong: true})
}

export const random = (req: Request, res: Response) => {
    let nRandom = Math.floor(Math.random() * 10)
    res.json({number: nRandom})
}

export const nome = (req: Request, res: Response) => {
    let nome: string = req.params.nome 
    res.json({nome})
}

export const createFrase = async (req: Request, res: Response) => {
    let {autor, txt } = req.body

    let newFrase = await Frase.create({autor, txt})
    res.json({id: newFrase.id, autor, txt })
}
