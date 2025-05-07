import HelloWorld from "./components/HelloWorld"
function App() {
  const seatNumbers = [1, 4, 7];
  return (
    <div className="App">
      <HelloWorld name="Srinivas" message="Hi there" emoji="❤️" seatNumbers ={seatNumbers}/>
    </div>
  )
}
export default App
