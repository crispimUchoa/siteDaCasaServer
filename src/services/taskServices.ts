import { Task, User } from "../models"
import { TaskInstance } from "../models/Task"
import { UserInstance } from "../models/User"

const taskServices = {
    findTaskById: async (id:number | string) => {
        const task = await Task.findByPk(id,{
            include: {
                association: 'users',
                through: {attributes: []},
                attributes: ['id','name','email', ['pic_url', 'picUrl']],
        }})
        task?.users?.sort((a,b)=>a.name.localeCompare(b.name))
        return task
    },
    findTaskUser: async (id: number | string) => {
        const userId = await Task.findByPk(id, {attributes: ['userId']}).then(resolve=>resolve?.userId)
        const user = await User.findOne({where: {id:userId}, attributes: ['id', 'name', 'email', ['pic_url', 'picUrl']]})
        if(!user) return {message: 'Usuário inexistente', userId}
        return user
    },
    skipTaskUser: async (userId: number|string, task: TaskInstance) => {
        const users = task.users
        if(!task.users) return
        const index = users?.findIndex((user: UserInstance) => user.id==userId)
        if (typeof index !== 'number') return {indice: 'Nao achado'}
        const nextIndex = index+1===task.users?.length ? 0 : index+1
        const nextId = task.users[nextIndex].id
        const [affectedRows, updatedTask] = await Task.update({userId: nextId}, {where: {id:2}, returning: true})
        

        return updatedTask
    }
}

export default taskServices