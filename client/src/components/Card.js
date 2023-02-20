import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { title, img, desc } = item;
  return (
    <Link className="max-h-[70%] w-[25%] rounded-lg border-2 flex flex-col items-center justify-around py-5 px-5 gap-5" style={{boxShadow:"0px 0px 10px 1px gray"}}>
      <div className="title text-center">{title}</div>
      <div className="img flex items-center justify-center">
        <img src={img} alt="" width={300} style={{maxHeight:"200px"}}/>
      </div>
      <div className="desc ">{desc}</div>
    </Link>
  );
};

export default Card;
