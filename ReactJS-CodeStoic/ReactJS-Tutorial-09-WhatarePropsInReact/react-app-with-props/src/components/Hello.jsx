
// adding pros
function Hello(props) {
  
  return (
    <div className="App">
      { console.log("props", props) }
      <h1>{props.message} {props.name} </h1>
    </div>
  )
}

Hello.defaultProps = {
  message: "Hello",
  name: "Guest"
};

export default Hello
