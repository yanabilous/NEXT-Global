import { Fragment } from "react";
import path from "path";
import fs from "fs/promises";

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const data = await getData(); // Тепер отримуємо дані на сервері

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData(); // Тепер отримуємо дані на сервері
  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export default ProductDetailPage;


// import {Fragment} from "react";
// import path from "path";
// import fs from "fs/promises";
//
// function ProductDetailPage(props) {
//
//   const {loadedProduct} = props;
//
//
//   return (
//     <Fragment>
//       <h1>{loadedProduct.title}</h1>
//       <p>{loadedProduct.description}</p>
//     </Fragment>
//   );
// }
//
// // export async function getData() {
// //
// //   const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
// //   const jsonData = await fs.readFile(filePath);
// //   const data = JSON.parse(jsonData);
// //
// //   return data;
// // }
//
//
// export async function getStaticProps(context) {
//   const {params} = context;
//   const productId = params.pid;
//
//   const data = await getData(); // Тепер отримуємо дані на сервері
//
//   const product = data.products.find((product) => product.id === productId);
//
//   return {
//     props: {
//       loadedProduct: product,
//     },
//   };
// }
//
// export async function getStaticPaths() {
//
//   const data = await getData();
//   const ids = data.products.map(product => product.id);
//   const pathsWithParams = ids.map(id => ({params: {pid: id}}));
//
//   return {
//     params: pathsWithParams,
//     fallback: "blocking",
//
//   };
// }
//
// async function getData() {
//   const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
//   const jsonData = await fs.readFile(filePath);
//   const data = JSON.parse(jsonData);
//
//   return data;
// }
//
// export default ProductDetailPage;