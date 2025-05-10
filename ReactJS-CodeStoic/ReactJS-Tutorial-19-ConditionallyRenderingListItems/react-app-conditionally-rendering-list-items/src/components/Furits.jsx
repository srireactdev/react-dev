import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 5, emoji: "🍎" },
    { name: "Mango", price: 8, emoji: "🥭" },
    { name: "Banana", price: 4, emoji: "🍌" },
    { name: "Orange", price: 9, emoji: "🍊" },
    { name: "Pineapple", price: 10, emoji: "🍍" },
  ];

  return (
    <div>
      <div>Fruits works</div>
      <ul>
        {fruits.map((fruit, index) => (
          <Fruit fruit={fruit}/>
        ))}
      </ul>
    </div>
  );
}
