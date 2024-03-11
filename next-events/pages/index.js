
import EventList from "../components/events/Event-list";
import {getFeaturedEvents} from "../helpers/api-util";

function HomePage(props) {
console.log(props);

  return <div>
    <ul>
      <header></header>
      <EventList items={props.events}/>
    </ul>
  </div>;
}

export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();

  return{
    props: {
      events: featuredEvents
    }
  }
}

export default HomePage;