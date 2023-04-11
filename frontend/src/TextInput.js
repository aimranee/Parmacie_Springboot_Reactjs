import { useRef } from "react";
import Fruits from "./Fruits";

function TextInput() {
  const inputRef = useRef(null);

  function handleClick(props) {
    inputRef.current.focus();
    inputRef.current.value = props.fruits.length;
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}
export default TextInput;
