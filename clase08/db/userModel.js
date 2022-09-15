
const moongose = require('mongoose');
const {Schema} = require('mongoose'); 

const userSchema = new Schema({
    name: {type: 'string', required: true},
    email: {type: 'string', required: true} ,
    direccion: {type: 'string', required: true}, 
    edad: {type: Number, required: true}
})



module.exports= moongose.model('users', userSchema);





