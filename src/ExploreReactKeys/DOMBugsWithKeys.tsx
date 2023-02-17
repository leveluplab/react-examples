import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./DOMBugsWithKeys.scss";


const Notification = (props: any) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (ref.current != null) {
        ref.current.style.display = 'none';
      }
    }, 5000);
  }, [props.message]);
  const key = uuidv4(); // Add Unique keys on each render to fix this. 
  return <div ref={ref}>{props.message}</div>;
};

const DOMBugsWithKeys = () => {
  let [message, setMessage] = useState(undefined);

  let handleClick = () => {
    let id = Math.trunc(Math.random() * 1000).toString();
    setMessage(`Check out our new item #${id}!`);
  };

  return (
    <div>
      <h1>DOM Manipulation Bugs with React keys</h1>
      <Notification message={message}></Notification>
      <button onClick={handleClick}>Generate notification</button>
    </div>
  );
};

export default DOMBugsWithKeys;
