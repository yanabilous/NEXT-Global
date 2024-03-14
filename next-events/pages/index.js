import Head from "next/head";
// import Link from 'next/link';
import EventList from "../components/events/Event-list";
import {getFeaturedEvents} from "../helpers/api-util";

function HomePage(props) {


  return (
    <div>
      <Head>
        <title>Next Js Events</title>
        <meta name="description" content="Find a lot of great events"/>

      </Head>
      <EventList items={props.events}/>
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  };
}

export default HomePage;