import { ObjectId } from "mongodb";
import { getCosmosClient } from "../shared/cosmosClient.js";

export default async function (context: any, req: any) {
  const { recordId } = req.body || {};

  if (!recordId) {
    return {
      status: 400,
      body: "recordId is required"
    };
  }

  const client = await getCosmosClient();
  const db = client.db("appdb");

  const record = await db
    .collection("records")
    .findOne({ _id: new ObjectId(recordId) });

  if (!record) {
    return {
      status: 404,
      body: "Record not found"
    };
  }

  context.log(
    `Processing notification for record "${record.title}"`
  );

  return {
    status: 200,
    body: "Notification processed"
  };
}
