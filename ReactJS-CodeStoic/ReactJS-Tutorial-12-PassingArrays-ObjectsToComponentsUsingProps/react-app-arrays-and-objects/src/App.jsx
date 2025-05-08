import DisplayPerson from "./components/DisplayPerson";

function App() {
 const person = {
  name: "Harini",
  message: "I love you !",
  emoji : "❤️",
  seatNumbers: [1, 3, 4]
 }
 

  return (
   
    <div className="App">
      <DisplayPerson person={person}/>
    </div>
  )
}
export default App
