import React from "react";
import crypto from "crypto";

const ListDemo = () => {
  const list = [
    {
      title: "Title 1",
    },
    {
      title: "Title 2",
    },
    {
      title: "Title 3",
    },
  ];

  const TodoList = ({ list }) => {
    return (
      <ol>
        {list.map((l) => {
          const uid = crypto.randomUUID();
          const title = l.title;
          return <li key={uid}>Title : {title.toUpperCase()}</li>;
        })}
      </ol>
    );
  };

  return (
    <div>
      <h1>ListDemo</h1>
      <TodoList list={list} />
    </div>
  );
};

export default ListDemo;
