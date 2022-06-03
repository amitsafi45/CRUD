import Sequelize from "sequelize";
import 'dotenv/config'
const connection_database=new Sequelize(process.env.DB_name,process.env.USER_NAME,process.env.PASSWORD,{
    host:process.env.HOST,
    dialect:process.env.DIALECT,
    define:{
        timestamps:false,
        freezeTableName:true
    },
    
    
    
})
export default connection_database