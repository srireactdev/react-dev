import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponentsUsingTernaryOperationComponents({
  isDisplay = false,
}) {
  return isDisplay ? <Code /> : <Welcome />;
}
