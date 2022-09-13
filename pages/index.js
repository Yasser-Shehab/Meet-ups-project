import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Wady Houf",
    description: "This is a first meeetup!",
  },
  {
    id: "m2",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Wady Houf",
    description: "This is a second meeetup!",
  },
  {
    id: "m3",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Wady Houf",
    description: "This is a third meeetup!",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  // fetch data from an api
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
