export default function Fruit({ fruit }) {
  const { name, price, emoji } = fruit;
  const fruitItemStyle = {
    border: "1px solid #ddd",
    padding: "10px",
    marginBottom: "10px",
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px", // space between emoji and text
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    fontFamily: "Arial, sans-serif",
    color: 'blue',
  };
  return (
    <>
      {price > 5 ? (
        <li style={fruitItemStyle}>
          <span style={{ marginRight: "4px" }}>{emoji}</span>
          <span>
            {name} ${price}
          </span>
        </li>
      ) : (
        ""
      )}
    </>
  );
}
