import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

export interface ListAttributes{
    userId: number
    taskId: number
}


export interface ListInstance extends Model<ListAttributes>, ListAttributes{}

export const List = sequelize.define<ListInstance, ListAttributes>('list', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      taskId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {model: 'tasks', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
})