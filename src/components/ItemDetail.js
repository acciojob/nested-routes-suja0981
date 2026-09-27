import React from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { itemId } = useParams();

  return (
    <div className="item-detail">
      <h3>Item: {itemId}</h3>
      <p>Details and description for {itemId}.</p>
    </div>
  );
};

export default ItemDetail;
