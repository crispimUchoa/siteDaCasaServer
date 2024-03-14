import { where } from "sequelize"
import { User } from "../models"
import { TaskInstance } from "../models/Task"

const userServices = {
    getAllUsers : async()=>{
        const users = await User.findAll({
            attributes: ['id', 'name', 'email', ['pic_url', 'picUrl'], ['created_at', 'createdAt'], ['updated_at', 'updatedAt']]
        })
        return users
    },
    getUserById : async(id: number)=>{
        const user = await User.findByPk(id, {
            include: {
                association: 'tasks',
                attributes: ['id', 'name', ['user_id', 'userId']],
                through: {attributes: []}
            }
        })
        user?.tasks?.sort((a: TaskInstance,b:TaskInstance)=>a.id-b.id)

        return user
    },
    findByEmail : async (email: string) => {
        const user = await User.findOne({where: {email}})
        return  user
    },
    //PUT
    update: async (id: number, attributes: {name:string, email: string, picUrl: string, phone:string}) => {
        const [affected, updatedUser] = await User.update(attributes, {where: {id}, returning: true})
        return updatedUser[0]
    },
    updatePassword: async (id: number, password: string) => {
        const [affected, updatedUser] = await User.update({password}, {where: {id}, returning: true, individualHooks: true})
        return updatedUser[0]
    },

    //POST
    createUser: async (name: string, email: string, password: string, role: string, picUrl: string, phone: string ) => {
        const user = await User.create({name, email, password, role, picUrl})
        return user
    }

}
export default userServices