import { useState, useEffect } from "react";
import Friend from "./Friend";

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div
      style={{
        border: "2px solid red",
        padding: "10px",
        margin: "10px",
        borderRadius: "20px",
      }}
    >
      <h3>Friends: {friends.length}</h3>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
}
