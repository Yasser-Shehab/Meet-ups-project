import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

function MeetupDetails(props) {
  return (
    <>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_DB_CONNECTION);

  const db = client.db();

  const meetupsCollections = db.collection("meetups");

  const meetups = await meetupsCollections.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({ params: { meetupId: meetup._id.toString() } })),
  };
}

export async function getStaticProps({ req, res, params }) {
  // fetch data from an api
  const meetupId = params.meetupId;
  console.log(meetupId);

  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_DB_CONNECTION);

  const db = client.db();

  const meetupsCollections = db.collection("meetups");

  const meetup = await meetupsCollections.findOne({ _id: ObjectId(meetupId) });

  console.log(meetup);

  client.close();
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      },
    },
  };
}

export default MeetupDetails;
