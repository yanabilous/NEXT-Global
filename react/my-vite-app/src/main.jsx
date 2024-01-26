import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import App from "./App.jsx";
import NewPost, {action as newPostAction} from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import Posts, {loader as postsLoader} from "./routes/Posts.jsx";

const router = createBrowserRouter([
  {
    path: "/", element: <RootLayout/>, children: [
      {
        path: "/", element: <Posts/>, loader: postsLoader, children: [
          {path: "/create-post", element: <NewPost/>, action: newPostAction},
        ]
      },

    ]
  },

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
);
