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
    res.status(201)

    res.json({id: newFrase.id, autor, txt })
}

export const listFrase = async (req: Request, res: Response) => {
    
    let list = await Frase.findAll()
    
    res.json({list})
}

export const getFrase = async (req: Request, res: Response) => {
    let {id} = req.params

    let frase = await Frase.findByPk(id)
    if(frase){
        res.json({frase})
    } else {
        res.status(400)
        res.json("Frase não encontrada")
    }
}

export const updateFrase = async (req: Request, res: Response) => {
    let { id } = req.params

    let {autor, txt} = req.body

    let frase = await Frase.findByPk(id)
    if (frase){
        frase.autor = autor
        frase.txt = txt
        await frase.save()

        res.json({frase})
    } else {
        res.json("Não encontrado")
    }
}