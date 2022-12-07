const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nombre:{type:String,required:true},
    apellido:{type:String,required:true},
    nombreusuario:{type:String,required:true},
    email:{type:String,required:true},
    contrasena:{type:String,required:true}
})

module.exports = mongoose.model("Usuario", UsuarioSchema);