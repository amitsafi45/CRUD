import connection_database from "../database_connection/db-config.js";
import Sequelize from "sequelize";
const dimmy = connection_database.define('dimmy_record', {
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    gender: {
        type: Sequelize.STRING
    },
    ip_address: {
        type: Sequelize.STRING
    }


})

export default dimmy