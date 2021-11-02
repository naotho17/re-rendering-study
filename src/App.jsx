import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  //state
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  //function
  const onChangeText = (e) => setText(e.target.value);
  const OnclickOpen = () => setOpen(!open);
  const onClickclose = useCallback(() => setOpen(false), [setOpen]);
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  //viewing
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={OnclickOpen}>表示</button>
      <ChildArea open={open} onClickclose={onClickclose} />
    </div>
  );
}
