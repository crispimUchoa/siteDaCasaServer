import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";
import bcrypt from 'bcrypt'
import { TaskInstance } from "./Task";

export interface UserAttributes{
    id: number
    name: string
    email:string
    password: string
    role: string
    phone: string
    picUrl: string
}

type CheckPasswordCallback = (err?: Error, isSame?: boolean)=>void

export interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'picUrl' | 'phone'>{}

export interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes{
  tasks?: TaskInstance[]
  checkPassword: (password: string, callbackfn: CheckPasswordCallback) => void
}

export const User = sequelize.define<UserInstance, UserAttributes>('user', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false
      },
      picUrl: {
        type: DataTypes.STRING
      },
      phone: {
        type: DataTypes.STRING,
      }
},
{
  hooks: {
    beforeSave: async (user) => {
      if( user.isNewRecord || user.changed('password')) {
        user.password = await bcrypt.hash(user.password.toString(), 10)
      }
    }
  }
}
)

User.prototype.checkPassword = function (password: string, callbackfn: CheckPasswordCallback){
  bcrypt.compare(password, this.password, (err, isSame) => {
    if(err){
      callbackfn(err)
    } else {
      callbackfn(err, isSame)
    }
  })
}