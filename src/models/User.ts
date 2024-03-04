import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface UserAttributes{
    id: number
    name: string
    email:string
    password: string
    role: string
    picUrl: string
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'picUrl'>{}

export interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes{}

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
      }
})
