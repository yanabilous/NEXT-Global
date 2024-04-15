import {MongoClient} from "mongodb";

// tFuxQdvVdpQlB8qY
export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://yanabilous05:tFuxQdvVdpQlB8qY@cluster0.n9zvhrh.mongodb.net/next-auth?retryWrites=true&w=majority&appName=Cluster0"
  );

  return client;
}