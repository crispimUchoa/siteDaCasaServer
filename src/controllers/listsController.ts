import { Request, Response } from "express";
import taskServices from "../services/taskServices";
import listServices from "../services/listsServices";
import { AuthRequest } from "../middlewares/auth";

const listsController = {
    addList: async (req: AuthRequest, res: Response)=>{
        const {taskId} = req.body
        const userId = req.user!.id
        try {
            const task = await taskServices.findTaskById(taskId)
            if(!task) return res.status(404).json({message: 'Tarefa não encontrada'})
            const newList = await listServices.addList(task, Number(userId))
            return res.status(201).json(newList)
        } catch (err) {
            if(err instanceof Error) return res.status(400).json({message: err.message})
        }
        
    }, 
    delete :async (req: AuthRequest, res: Response)=>{
        const {taskId} = req.body
        const userId = req.user!.id
        try {
            await listServices.delete(taskId, userId)
            res.status(204).send('Elemento da lista excluído com sucesso!')
        } catch (err) {
            if(err instanceof Error) return res.status(400).json({message: err.message})
        }
    }
}

export default listsController