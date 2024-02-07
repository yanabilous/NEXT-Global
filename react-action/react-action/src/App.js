//
// import {Route, Switch} from "react-router-dom";
// import AllMeetupsPage from "./pages/AllMeetups";
// import NewMeetupPage from "./pages/NewMeetup";
// import FavoritesPage from "./pages/Favorites";
//
// function App() {
//   return (
//     <div>
//       <Switch>
//         <Route path="/"><AllMeetupsPage/></Route>
//         <Route path="/new-meetup"><NewMeetupPage/></Route>
//         <Route path="/favorites"><FavoritesPage/></Route>
//       </Switch>
//     </div>
//   );
// }
//
// export default App;
import {Routes, Route} from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllMeetupsPage />} />
      <Route path="/new-meetup" element={<NewMeetupPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}

export default App;
