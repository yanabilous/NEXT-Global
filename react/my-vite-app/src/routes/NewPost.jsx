import classes from "./NewPost.module.css";
// import {useState} from "react";
import Modal from "../components/Modal";
import {Form, Link, redirect} from "react-router-dom";


function NewPost() {
  // const [enteredBody, setEnteredBody] = useState();
  // const [enteredAuthor, setEnteredAuthor] = useState();


  //
  // function submitHandler(event) {
  //   event.preventDefault();
  //   const postData = {
  //     body: enteredBody,
  //     author: enteredAuthor
  //   };
  //
  //   console.log(postData);
  //   // onAddPost(postData);
  //
  // }

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p className={classes.actions}>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3}/>
        </p>
        <p className={classes.actions}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="author" required/>
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">Cancel</Link>
          <button type="submit">Submit</button>

        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return redirect("/");
}