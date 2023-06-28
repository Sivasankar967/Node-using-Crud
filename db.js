const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectId;


let database;


async function getDatabase(){
    const client = await MongoClient.connect('mongodb+srv://sankarsiva6464:6384140761@ejswith-node.0gkljfc.mongodb.net/?retryWrites=true&w=majority');
    database = client.db('library');

    if (!database) {
            console.log('Database not connected');
    }

    return database;
}

module.exports = {
    getDatabase,
    ObjectID
}