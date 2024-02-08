import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import {useContext} from "react";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  function toggleFavoritesStatusHandler() {
    if(itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id)
    }else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
      image: props.image,
      address: props.address,
      description: props.description
      })
    }

  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}/>
        </div>
        <div className={classes.content}>
          <h1>{props.title}</h1>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite ? "Remove from favorites" : "To favorites"}</button>
        </div>
      </Card>
    </li>

  );
}

export default MeetupItem;