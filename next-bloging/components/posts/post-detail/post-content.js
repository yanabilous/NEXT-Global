import PostHeader from "./post-header";

import classes from "./post-content.module.css"

const DUMMY_POSTS =
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started With Next1",
    image: "getting-started-nextjs.png",
    date: "2024-03-10",
    content: " # This is a first post"
  };



function PostContent(props) {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath}/>
      {DUMMY_POSTS.content}
    </article>
  );

}

export default PostContent;