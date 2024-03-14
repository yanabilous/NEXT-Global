// // // import {getAllEvents} from "../../dummy-data";
// // import EventList from "../../components/events/Event-list";
// // import EventsSearch from "../../components/events/events-search";
// // import {Fragment} from "react";
// // import {useRouter} from "next/router";
// // import {getAllEvents} from "../../helpers/api-util";
// // import Head from "next/head";
// //
// // function AllEventsPage(props) {
// //   const router = useRouter();
// //   const {events} = props;
// //
// //   function findEventsHandler(year, month) {
// //     const fullPath = `/events/${year}/${month}`;
// //     router.push(fullPath);
// //   }
// //
// //   return (
// //     <Fragment>
// //       <Head>
// //         <title>All Events</title>
// //         <meta name="description" content="Find a lot of great events"/>
// //       </Head>
// //       <EventsSearch onSearch={findEventsHandler}/>
// //       <EventList items={events}/>
// //     </Fragment>
// //   );
// //
// // }
// //
// // export async function getStaticProps() {
// //
// //   const events = await getAllEvents();
// //
// //   return {
// //     props: {
// //       events: events,
// //     },
// //     revalidate: 60
// //   };
// // }
// //
// // export default AllEventsPage;
// import { Fragment } from 'react';
// import { useRouter } from 'next/router';
// import Head from 'next/head';
//
// import { getAllEvents } from '../../helpers/api-util';
// import EventList from '../../components/events/event-list';
// import EventsSearch from '../../components/events/events-search';
//
// function AllEventsPage(props) {
//   const router = useRouter();
//   const { events } = props;
//
//   function findEventsHandler(year, month) {
//     const fullPath = `/events/${year}/${month}`;
//
//     router.push(fullPath);
//   }
//
//   return (
//     <Fragment>
//       <Head>
//         <title>All my events</title>
//       </Head>
//       <Head>
//         <title>All Events</title>
//         <meta
//           name='description'
//           content='Find a lot of great events that allow you to evolve...'
//         />
//       </Head>
//       <EventsSearch onSearch={findEventsHandler} />
//       <EventList items={events} />
//     </Fragment>
//   );
// }
//
// export async function getStaticProps() {
//   const events = await getAllEvents();
//
//   return {
//     props: {
//       events: events,
//     },
//     revalidate: 60
//   };
// }
//
// export default AllEventsPage;

import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { getAllEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

function AllEventsPage(props) {
  const router = useRouter();
  const { events } = props;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All my events</title>
      </Head>
      <Head>
        <title>All Events</title>
        <meta
          name='description'
          content='Find a lot of great events that allow you to evolve...'
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60
  };
}

export default AllEventsPage;