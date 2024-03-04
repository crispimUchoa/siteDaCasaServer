import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";
import { UserInstance } from "./User";

export interface TaskAttributes{
    id: number
    name: string
    userId: number
}

export interface TaskCreationAttributes extends Optional<TaskAttributes, 'id' | 'userId'>{}

export interface TaskInstance extends Model<TaskAttributes, TaskCreationAttributes>, TaskAttributes{
    users?: UserInstance[]
}

export const Task = sequelize.define<TaskInstance, TaskAttributes>('task', {
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
    userId: {
        type: DataTypes.STRING
    }
})