const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI);
const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/databasetest' ;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //serverApi: ServerApiVersion.v1
})

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Base de Datos Conectada');
})