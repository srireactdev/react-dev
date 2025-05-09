import Fruit from "./Fruit";
export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Mango", price: 7, emoji: "🥭" },
    { name: "Banana", price: 7, emoji: "🍌" },
    { name: "Orange", price: 7, emoji: "🎃" },
    { name: "PineApple", price: 7, emoji: "🍍" },
  ];
  return (
    <div>
      <div>Fruit Works</div>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            <Fruit fruit={fruit}></Fruit>
          </li>
        ))}
      </ul>
    </div>
  );
}