import mongoose, { connect } from "mongoose";

const conectarDB = () => {
    const urlConexion = String(process.env.MONGO_URI);
    connect(urlConexion)
        .then(con => {
            console.log(`Conexion establecida desde base ${urlConexion}`);
        })
        .catch(error => {
            console.log(error);
        });
}
export default conectarDB;