import { List, Task, User } from "../models"
import { TaskInstance } from "../models/Task"
import { UserInstance } from "../models/User"

const taskServices = {
    getAllTasks: async ()=>{
        const tasks = await Task.findAll()
        if(!tasks) return {message: 'nenhuma task'}
        return tasks
    },
    findTaskById: async (id:number | string) => {
        const task = await Task.findByPk(id,{
            include: {
                association: 'users',
                through: {attributes: []},
                attributes: ['id','name','email', ['pic_url', 'picUrl']],
        }})
        task?.users?.sort((a: UserInstance,b:UserInstance)=>a.id-b.id)
        return task
    },
    findTaskUser: async (id: number | string) => {
        const userId = await Task.findByPk(id, {attributes: ['userId']}).then((resolve)=>resolve?.userId)
        const user = await User.findOne({where: {id:userId}, attributes: ['id', 'name', 'email', ['pic_url', 'picUrl']]})
        if(!user) return {message: 'Usuário inexistente', userId}
        return user
    },
    skipTaskUser: async (id: number) => {
        const task = await Task.findByPk(id, {include: {association: 'users'}})
        if(!task) return null
        const users = task.users;
        const lastIndex = users?.findIndex(user=>user.id===task.userId)
        if(!users) return
        if(lastIndex===undefined) {
            const [affected, updatedTask] = await Task.update({userId: users[0].id ? users[0].id : -1}, {where: {id: task.id}, returning: true})
            return updatedTask
        }
        
        const nextIndex = users?.length -1 === lastIndex ? 0 : lastIndex +1;
        const index = nextIndex ? nextIndex : 0
        const [affected, updatedTask] = await Task.update({userId: users[index].id}, {where: {id: task.id}, returning: true})
        return updatedTask
    },
    addTask: async(name: string)=> {
        await Task.create({name})
    },
    delete: async (id: number)=>{
        await Task.destroy({where: {id}})
    }
}

export default taskServices