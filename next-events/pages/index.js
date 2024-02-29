import {getFeaturedEvents} from "../dummy-data";
import EventList from "../components/events/Event-list";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return <div>
    <ul>
      <header></header>
      <EventList items={featuredEvents}/>
    </ul>
  </div>;
}

export default HomePage;