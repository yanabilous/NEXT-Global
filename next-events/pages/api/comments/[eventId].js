// import comments from "../../../components/input/comments";
import {MongoClient} from "mongodb";

async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect("mongodb+srv://yanabilous05:0HJyI2xPlMD7cce5@cluster0.txcaw1a.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0");


  if (req.method === "POST") {
    const {email, name, text} = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({message: "Invalid input."});
      return;
    }

    const newComment = {
      // id: new Date().toISOString(),
      email,
      name,
      text,
      eventId
    };

    const db = client.db();
    const result = await db.collection("comments").insertOne({newComment});
    console.log(result);
    newComment.id = result.insertedId;
    res.status(201).json({message: "Added comment.", comment: newComment});

  }
  if (req.method === "GET") {
    const dummyList = [
      {id: "c1", name: "Yana", text: "A first comment!"},
      {id: "c2", name: "Ann", text: "A first comment!"},
    ];

    res.status(200).json({comments: dummyList});
  }
  client.close();
}

export default handler;