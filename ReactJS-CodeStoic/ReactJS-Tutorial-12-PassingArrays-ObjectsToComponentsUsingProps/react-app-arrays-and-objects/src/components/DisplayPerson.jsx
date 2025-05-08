function DisplayPerson({ person }) {
  const divStyle = {
    display: "grid",
    placeItems: "center",
    height: "50vh",
    width: "50vw",
    border: "2px solid black",
    padding: "10px",
  };
  const { name, message, emoji, seatNumbers } = person;
  console.log("seatNumbers", seatNumbers)
  return (
    <div>
      <p>
        {name} {message} {emoji} 
      </p>
      <ul>
        {
           seatNumbers.map((seatNumber) => (
            <li key={seatNumber}>{seatNumber}</li>
           ))
        }
      </ul>
    </div>
  );
}
export default DisplayPerson;
