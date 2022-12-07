const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const EnvioSchema = new Schema({
    fecha_crea:{type:String,required:true},
    hora_crea:{type:String,required:true},
    nom_destinatario:{type:String,required:true},
    ced_destinatario:{type:String,required:true},
    dir_entrega:{type:String,required:true},
    ciudad_entrega:{type:String,required:true},
    estado:{type:String,required:true},
    largo:{type:Number,required:true},
    ancho:{type:Number,required:true},
    alto:{type:Number,required:true},
    peso:{type:Number,required:true},
    dir_recogida:{type:String,required:true},
    ciudad_recogida:{type:String,required:true},
    id_cliente:{type:String,required:true}
})

module.exports = mongoose.model("Envio", EnvioSchema);