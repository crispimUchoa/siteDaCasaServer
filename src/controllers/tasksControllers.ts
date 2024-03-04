import { Request, Response } from "express";
import taskServices from "../services/taskServices";

export const tasksController = {
    //GET
    index: async (req: Request, res: Response) => {
        const {id} = req.params

        try{
            const task = await taskServices.findTaskById(id)
            return res.json(task)
        } catch(err){
            if(err instanceof Error) return res.status(400).json({message: err.message})
        }
    },
    getTaskUser: async (req: Request, res: Response) => {
        const {id} = req.params
        
        try{
            const user = await taskServices.findTaskUser(id)
            return res.json(user)
        } catch(err){
            if(err instanceof Error) return res.status(400).json({message: err.message})
        }
    },
    //PUT
    skipTaskUser: async (req: Request, res: Response) => {
        const {id} = req.params
        
        try{
            const task = await taskServices.findTaskById(id)
            if(!task) return res.status(404).send()
            const updatedTask = await taskServices.skipTaskUser(task?.userId, task)
            return res.json(updatedTask)
        } catch(err){
            if(err instanceof Error) return res.status(400).json({message: err.message})
        }
    }
}