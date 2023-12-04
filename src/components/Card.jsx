import React, { useState } from "react";
import "./card.css";
import DetailModal from "./DetailModal";

const Card = ({ item, handleOpen }) => {
  
  return (
    <div class="card" style={{ width: "18rem", height: "510px" }}>
      <img
        class="card-img-top"
        style={{ width: "18rem", height: "300px" }}
        src={
          item.volumeInfo.imageLinks?.smallThumbnail
            ? item.volumeInfo.imageLinks?.smallThumbnail
            : "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg"
        }
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{item.volumeInfo?.title}</h5>
        <p class="card-text">
          {item.volumeInfo.authors ? item.volumeInfo.authors[0] : "No Author"}
        </p>

        <a
          class="btn btn-primary mx-2"
          href={item.volumeInfo?.previewLink}
          target="_blank"
        >
          Preview
        </a>
        <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={()=>{
          handleOpen(item)
        }}
      >
          Detail
      </button>
      </div>
    </div>
  );
};

export default Card;