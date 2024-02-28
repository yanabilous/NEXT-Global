function EventItem(props) {
  const {items} = props;

  return <li>
    <img src="" alt=""/>
    <div>
      <h2>TITLE</h2>
    </div>
    <div>
      <time>DATE</time>
    </div>
    <div>
      <address>ADDRESS</address>
    </div>
  </li>;
}

export default EventItem;