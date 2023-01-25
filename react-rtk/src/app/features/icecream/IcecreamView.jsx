import React from "react";
//reads data from the store
import { useSelector } from "react-redux";

export const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  return (
    <div>
      <h2>Number of Ice Creams - {numOfIcecreams} </h2>
      <button>Order Ice Creams</button>
      <button>Restock Ice Creams</button>
    </div>
  );
};

//sort of a wrapper around store.get state
