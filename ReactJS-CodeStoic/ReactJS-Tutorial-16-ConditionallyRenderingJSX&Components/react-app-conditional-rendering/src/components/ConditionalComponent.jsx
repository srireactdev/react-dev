import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent({ isCondition = "true" }) {
  if (isCondition) {
    return (
      <div>
        <div>ConditionalComponent Works</div>
        <Code />
      </div>
    );
  } else {
    return (
      <div>
        <div>ConditionalComponent Works</div>
        <Welcome />
      </div>
    );
  }
}
