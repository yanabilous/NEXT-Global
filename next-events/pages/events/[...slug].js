import {useRouter} from "next/router";
// import {getFilteredEvents} from "../../dummy-data";
import EventList from "../../components/events/Event-list";
import ResultsTitle from "../../components/events/results-title";
import {Fragment} from "react";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import {getFilteredEvents} from "../../helpers/api-util";

function FilteredEventsPage(props) {
  const router = useRouter();

  // const filterData = router.query.slug;
  //
  // if (!filterData) {
  //   return <p className="center">Loading...</p>;
  // }
  //
  // const filteredYear = filterData[0];
  // const filteredMonth = filterData[1];
  //
  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;

  if (props.hssError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values! </p>
        </ErrorAlert>


        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }
 const filteredEvents = props.events;
  // const filteredEvents = getFilteredEvents({
  //   year: numYear,
  //   month: numMonth,
  // });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p> No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );

  }

  const date = new Date(props.date.year, props.date.month - 1);

  return <Fragment>
    <ResultsTitle date={date}/>
    <EventList items={filteredEvents}/>
  </Fragment>;
}


export async function getServerSideProps(context) {
  const {params} = context;

  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2023 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: {hssError: true},
      // notFound: true,
      // redirect: {
      //   destination: "/error"
      // }
    };
    // return (
    //   <Fragment>
    //     <ErrorAlert>
    //       <p>Invalid filter. Please adjust your values! </p>
    //     </ErrorAlert>
    //
    //
    //     <div className="center">
    //       <Button link="/events">Show all events</Button>
    //     </div>
    //   </Fragment>
    // );
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth
      }
    }
  }
}

export default FilteredEventsPage;