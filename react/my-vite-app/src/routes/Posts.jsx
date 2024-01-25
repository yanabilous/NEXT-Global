import PostsList from "../components/PostsList.jsx";
import {Outlet} from "react-router-dom";
// import MainHeader from "./components/MainHeader.jsx";
// import {useState} from "react";

function Posts() {
  // const [modalIsVisible, setModalIsVisible] = useState();
  //
  // function hideModalHandler() {
  //   setModalIsVisible(false);
  // }

  //   function showModalHandler() {
  //   setModalIsVisible(true);
  // }

  return (
    <>
      <Outlet/>
      {/*<MainHeader onCreatePost={showModalHandler}/>*/}
      <main>
        {/*<PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>*/}
        <PostsList/>
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
