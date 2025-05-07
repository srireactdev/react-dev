function HelloWorld({ name, message, emoji, seatNumbers }) {
  const divStyle = {
    display: "grid",
    placeItems: "center",
    height: "50vh",
    width: "50vw",
    border: "2px solid black",
    padding: "10px",
  };

  return (
    <div style={divStyle}>
      <div>
        <p>
          {name} {message} {emoji} {seatNumbers}
        </p>
      </div>
      <div>
        <p>
          {name} {message} {emoji}
        </p>
        <ul>
          {seatNumbers.map((element) => (
            <li key={element}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default HelloWorld;
