// import {useRouter} from "next/router";

import {Fragment} from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import {getAllEvents, getEventById} from "../../helpers/api-util";

function EventDetailPage(props) {
  // const router = useRouter();
  // const eventId = router.query.eventId;
  const event = props.selectedEvent;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );

  }
  return (
    <Fragment>
      <EventSummary title={event.title}/>
      <EventLogistics
        date={event.date}
        location={event.location}
        image={event.image}
        iamgeAlt={event.title}/>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );

}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event
    }
  };
}

export async function getStaticPaths() {

  const events = await getAllEvents();

  const paths = events.map(event => ({params: {eventId: event.id}}));
  return {
    paths: paths,
    fallback: false
  };
}

  export default EventDetailPage;