import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const data = req.body;

      const client = await MongoClient.connect(process.env.NEXT_PUBLIC_DB_CONNECTION);
      const db = client.db();

      const meetupsCollections = db.collection("meetups");

      const result = await meetupsCollections.insertOne({ data });

      console.log(result);

      client.close();

      res.status(200).json({ messaage: "Meetup inserted" });
    }
  } catch (error) {
    res.status(500).json({ message: "An Error Occurred" });
  }
}

export default handler;
