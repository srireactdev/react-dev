
function HelloWorld({message, name, emoji}) {
    console.log("message", message, "name", name, "emoji", emoji);
  return (
    <div className="App">
      <h1>{message} {name} {emoji}</h1>
    </div>
  )
}

export default HelloWorld
