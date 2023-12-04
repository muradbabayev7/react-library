import React, { useState } from "react";
import Card from "./Card";
import "./card.css"
import DetailModal from "./DetailModal";

const Cards = ({ data }) => {
  const [myData, setMyData] = useState({})
  const handleOpen = (Mydata)=>{
    setMyData(Mydata)
    console.log(Mydata)
  }
  return (
    <div className="container my-4">
      <div className="row cardsRow">
        {data.map((item, index) => {
          return <div className="col-3" key={index}>
            <Card item={item} data={data} handleOpen={handleOpen} />
          </div>;
        })}
      </div>
      <DetailModal data={myData}/>

    </div>
  );
};

export default Cards;
