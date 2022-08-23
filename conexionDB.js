const mysql = require("mysql"); //Pido usar el modulo mysql "conector".
require("dotenv").config();

let sqlComandoD = "DELETE FROM platos WHERE id_plato = 2";

//Preparo conexion con la DB.
const conexionDB = mysql.createConnection({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB
});

/* Obtener informacion del registro de la tabla platos */
conexionDB.query("SELECT * FROM platos", (error, registros) =>{
    if(error){
        throw error;
    }
    console.log("Registros de la tabla: \n", registros);
});

/* insertamos un nuevo plato 
conexionDB.query("INSERT INTO platos(nombre, precio, con_oferta) VALUES ('Ensalada Cesar', 800, FALSE)", (error, resultado) =>{
    if(error){
        throw error;
    }
    console.log("Resultado de la tabla: \n", resultado);
});

/* Se actualiza un registro de la tabla 
conexionDB.query("UPDATE platos SET con_oferta = FALSE WHERE con_oferta = TRUE", (error, resultado) =>{
    if(error){
        throw error;
    }
    console.log("Se actualiza la tabla: \n", resultado);
});

/* Se elimina un registro de la tabla 
conexionDB.query(sqlComandoD, (error, resultado) =>{
    if(error){
        throw error;
    }
    console.log("Se elimina un id de la tabla: \n", resultado);
});
*/

conexionDB.end((error) =>{
    if(error){
        return console.log("error: "+ error.message);
    }
    console.log("Conexion a DB terminada.");
});