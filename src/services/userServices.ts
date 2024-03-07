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
    update: async (id: number, attributes: {email: string, picUrl: string}) => {
        const [affected, updatedUser] = await User.update(attributes, {where: {id}, returning: true})
        return updatedUser[0]
    },
    updatePassword: async (id: number, password: string) => {
        const [affected, updatedUser] = await User.update({password}, {where: {id}, returning: true, individualHooks: true})
        return updatedUser[0]
    }

}
export default userServices