import { MongoClient } from "mongodb";

let cachedClient: MongoClient | null = null;

export async function getCosmosClient(): Promise<MongoClient> {
  if (cachedClient) return cachedClient;

  const uri = process.env.COSMOS_MONGO_URI;
  if (!uri) {
    throw new Error("COSMOS_MONGO_URI not set");
  }

  const client = new MongoClient(uri);
  await client.connect();

  cachedClient = client;
  return client;
}
