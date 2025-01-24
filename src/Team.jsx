import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(0);

  const handleAdd = () => {
    setTeam(team + 1);
  }

  const handleRemove = () => {
    setTeam(Math.max(team - 1, 0));
  }

  const styleTeam = {
    border: "2px solid purple",
    padding: "20px",
    margin: "10px",
    borderRadius: "15px",
  };

  return (
    <div style={styleTeam}>
      <h3>Team: {team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
