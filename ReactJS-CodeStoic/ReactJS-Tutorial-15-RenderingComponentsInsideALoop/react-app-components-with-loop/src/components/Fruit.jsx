export default function Fruit({ fruit }) {
  const { name, price, emoji } = fruit;
  return (
    <div>
      {" "}
      {emoji} {name} ${price}{" "}
    </div>
  );
}

