import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    database: 'house_app',
    dialect: "postgres",
    host: 'dpg-cnm6r9ed3nmc73arfklg-a',
    username: 'house_app_user',
    password: 'LotcDl29nrSUOljrUeC5sPUws03QrT6J',
    port: 5432,
    define: {
        underscored: true
    }
})