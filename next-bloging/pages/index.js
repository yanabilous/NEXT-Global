import {Fragment} from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import {getFeaturedPosts} from "../lib/posts-util";

//
// const DUMMY_POSTS = [
//   {
//     slug: "getting-started-with-nextjs",
//     title: "Getting Started With Next1",
//     image: "getting-started-nextjs.png",
//     excerpt: "NextJS is a the React framework for production",
//     date: "2024-03-10"
//   },
//   {
//     slug: "getting-started-with-nextjs2",
//     title: "Getting Started With Next2",
//     image: "getting-started-nextjs.png",
//     excerpt: "NextJS is a the React framework for production",
//     date: "2024-03-10"
//   },
//   {
//     slug: "getting-started-with-nextjs3",
//     title: "Getting Started With Next3",
//     image: "getting-started-nextjs.png",
//     excerpt: "NextJS is a the React framework for production",
//     date: "2024-03-10"
//   },
//   {
//     slug: "getting-started-with-nextjs",
//     title: "Getting Started With Next4",
//     image: "getting-started-nextjs.png",
//     excerpt: "NextJS is a the React framework for production",
//     date: "2024-03-10"
//   },
// ];

function HomePage(props) {

  return (
    <Fragment>
      <Hero/>
      <FeaturedPosts posts={props.posts}/>
    </Fragment>
  );

}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  };
}

export default HomePage;