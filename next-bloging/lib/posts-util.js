import fs from "fs";
import path from "path";

import matter from "gray-matter";


const postsDirectory = path.join(process.cwd(), "posts");

function getPostData(fileName) {
  const filePath = fs.readdirSync(postsDirectory, fileName);
  const fileContent = fs.readdirSync(filePath, "utf-8");
  const {data,  content} = matter(fileContent);

  const postSlug = fileName.release(/\.md$/, '');

  const postData = {}
}

function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

}

// export default getAllPosts;