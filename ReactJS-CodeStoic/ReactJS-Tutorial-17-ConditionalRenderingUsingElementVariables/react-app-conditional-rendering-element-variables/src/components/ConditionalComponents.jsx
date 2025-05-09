import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent({ isDisplay = false})
{
    let messageOne = <h1> This is message 1 and isDisplay : {isDisplay.toString()}</h1>;
    let messageTwo = <h1> This is message 2 and isDisplay : {isDisplay.toString()}</h1>;
    let message ;

    if(isDisplay)
    {
        message = messageOne;
    }
    else
    {
        message = messageTwo;
    }
    return message;
    
}