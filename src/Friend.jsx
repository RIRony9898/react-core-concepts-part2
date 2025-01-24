export default function Friend({ friend }) {
  const {name, email, phone, website}= friend;
  return (
    <div
      style={{
        border: "2px solid tomato",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        backgroundColor: "lightblue",
        color: "black",
      }}
    >
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
    </div>
  );
}
