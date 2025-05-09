function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Mango", price: 7, emoji: "🥭" },
    { name: "Banana", price: 7, emoji: "🍌" },
    { name: "Orange", price: 7, emoji: "🎃" },
    { name: "PineApple", price: 7, emoji: "🍍" },
  ];

  return (
    <div className="App">
      <ul>
        {fruits.map((fruit, index) => (
          <li key="index">
            {fruit.emoji} {fruit.name} ${fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
