import React from "react";
import blogData from "../data/blog";
import Header from "./header";
import About from "./about";
import ArticleList from "./articlelist";
import Article from "./article";

console.log(blogData);

function App() {
  return (
    <div className="App">
     <Header name="Overreacted"/>
     <About image="https://via.placeholder.com/215" />
     <ArticleList post={blogData.posts} />
     <Article  title="" date="" preview="" />
    </div>
  );
}

export default App;
