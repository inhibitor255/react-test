"use client";
import React, { useState } from "react";
const Item = ({ name, price }) => {
  return (
    <li>
      {name}, ${price}
    </li>
  );
};

const Counter = () => {
  const [data, setData] = useState([
    { id: 1, name: "Apple", price: 0.99 },
    { id: 2, name: "Orange", price: 0.89 },
  ]);

  const priceIncreaseHandler = () => {
    const id = data.length + 1;
    console.log("first", first);
    setData([...data, { id, name: `Item ${id}`, price: 0.01 * id }]);
  };
  return (
    <div>
      <h1>Hello React</h1>
      <ul>
        {data.map((i) => (
          <Item name={i.name} key={i.id} price={i.price} />
        ))}
      </ul>

      <div className=" " onClick={priceIncreaseHandler}>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Purple to blue
          </span>
        </button>
      </div>
    </div>
  );
};

export default Counter;
