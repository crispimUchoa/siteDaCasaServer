import { List, Task, User } from "../models"
import { TaskInstance } from "../models/Task"
import { UserInstance } from "../models/User"
import taskServices from "./taskServices"

const listServices = {
    addList: async(task: TaskInstance, userId: number)=>{
        const luckyUser = await User.findByPk(task.userId)
        if(task.userId === null || !luckyUser||task.userId===-1){
            await Task.update({userId}, {where: {id: task.id}})
        }
        const newList = await List.create({taskId: task.id, userId})
        return newList
    },
    delete: async(taskId: number, userId: number)=>{
        const task = await Task.findByPk(taskId, {include: {association: 'users'}})
        if(task?.users?.length===null || task?.users?.length===undefined) return
        if(task?.users?.length===1){
            await Task.update({userId:-1}, {where: {id: task.id}})
        } else if (task.users?.length>1) {
            await taskServices.skipTaskUser(task.id)
        } 
        await List.destroy({where: {userId, taskId}})
    }, 
}

export default listServices