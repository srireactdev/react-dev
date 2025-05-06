function Hello() {

const name = "Srinivas";
function displayMessage()
{
    return "Wow!";
}
  return (
    <div>
    <h1>Hello from a Hello Component!</h1>
    <p> Including JavaScript code right now above we have name as js variable and we can use wrap name with currly
    </p>
    <p> user name is {name}</p>
    <p>Java Script Expression {2+3}</p>
    <p> calling JS method with in jsx {displayMessage()}</p>
    </div>
  )
}

export default Hello
