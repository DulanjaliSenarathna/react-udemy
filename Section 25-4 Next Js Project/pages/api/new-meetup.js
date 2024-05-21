// api/new-meetup
import {MongoClient} from 'mongodb'

async function handler(req, res){
if(req.method === 'POST'){
    const data = req.body;

  const client = await MongoClient.connect('mongodb+srv://dulanjali:dulanjali@cluster0.iw8arkr.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
  const db = client.db();

  const meetupCollection = db.collection('meetups');
const result = await meetupCollection.insertOne(data);
console.log(result);
client.close();
res.status(201).json({message:'Meetup Inserted!'})
}
}

export default handler;

