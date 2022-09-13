import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const data = req.body;

      const client = await MongoClient.connect(
        "mongodb+srv://AquaApple:AquaApple@cluster0.u7jyf.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();

      const meetupsCollections = db.collection("meetups");

      const result = await meetupsCollections.insertOne({ data });

      console.log(result);

      client.close();

      res.status(200).json({ messaage: "Meetup inserted" });
    }
  } catch (error) {
    alert(error.message);
  }
}

export default handler;
