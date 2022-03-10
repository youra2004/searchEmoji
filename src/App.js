import classes from "./App.module.css";
import { useState } from "react";

const emoji = [
  {
    id: "e1",
    img: "",
    name: "",
  },
  {
    id: "e2",
    img: "💯",
    name: "100",
  },
  {
    id: "e3",
    img: "🔢",
    name: "1234",
  },
  {
    id: "e4",
    img: "😀",
    name: "Grinning",
  },
  {
    id: "e5",
    img: "😬",
    name: "Grimacing",
  },
];
function App() {
  const [inputValue, setInputValue] = useState("");

  const searchEmoji = (value) => {
    console.log(value.target.value);
    setInputValue(value.target.value);
  };

  const copyHandler = (emo) => {
    console.log(emo.target.innerText.substr(0, 2));
    navigator.clipboard.writeText(emo.target.innerText.substr(0, 2));
  };

  let loadEmoji = [];

  if (inputValue === "") {
    loadEmoji = emoji;
  } else {
    emoji.map((emo) => {
      console.log(emo.name.includes(inputValue));
      if (emo.name.includes(inputValue)) {
        loadEmoji.push(emo);
      }
    });
  }
  return (
    <div classes={classes.emoji}>
      <div className={classes.title}>
        <h1>😸 Emoji Search 😺</h1>
      </div>
      <div className={classes.search}>
        <input onChange={searchEmoji} />
      </div>
      <div className={classes.list}>
        {loadEmoji.map((emo) => {
          return (
            <p key={emo.id} onClick={copyHandler}>
              {emo.img} {emo.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default App;
