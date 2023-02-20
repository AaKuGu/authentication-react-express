import React from "react";
import { posts } from "../data";
import Card from "./Card";

const Home = () => {
  return (
    <div
      className="w-full flex items-start justify-center h-full  gap-10 px-10 py-20"
      
    >
      {posts.map((item, i) => {
        return <Card item={item} />;
      })}
    </div>
  );
};

export default Home;
