import {MongoClient} from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({message: "Invalid email address"});
      return;
    }

    const client = await MongoClient.connect("mongodb+srv://yanabilous05:0HJyI2xPlMD7cce5@cluster0.txcaw1a.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0");

    const db = client.db();
    await db.collection("newsLetter").insertOne({email: userEmail});
    client.close();
    res.status(201).json({message: "Signed up!"});
  }
}

export default handler;
