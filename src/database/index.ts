import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    database: 'house_app',
    dialect: "postgres",
    host: 'localhost',
    username: 'crispim',
    password: 'abacate123',
    port: 5432,
    define: {
        underscored: true
    }
})