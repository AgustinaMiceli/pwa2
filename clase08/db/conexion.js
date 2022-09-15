
const mongoose= require('mongoose');
const {MONGO, MONGOATLAS} = require('../config/mongo');

exports.getConnection = async () => {
    try{
        await mongoose.connect(MONGOATLAS, {useNewUrlParser: true, 
            useUnifiedTopology: true, 
            });
        return 'Conexion Correcta'
    } catch(error) {
        return 'Error en mi conexión'        
    }
}



/*const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://agusmiceli:<password>@cluster0.0z4ygck.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/









