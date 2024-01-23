import PostsList from "./components/PostsList.jsx";
import MainHeader from "./components/MainHeader.jsx";
import {useState} from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState();

  function hideModalHandler() {
    setModalIsVisible(false);
  }

    function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
      </main>
    </>
  );
}

export default App;
