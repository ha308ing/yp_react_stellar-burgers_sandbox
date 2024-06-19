import { ChangeEvent, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { v4 } from "uuid";
import "./items.css";

export const Items = () => {
  const [items, setItems] = useState<Array<{ text: string; id: string }>>([]);
  const [text, setText] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setText(event.target.value);
  };

  const clearText = () => {
    setText("");
  };

  const addItem = () => {
    const id = v4();
    setItems((items) => [...items, { text, id }]);
    clearText();
  };

  const removeItem = (itemId: string) => () => {
    setItems((items) => items.filter(({ id }) => id !== itemId));
  };
  return (
    <>
      <input onChange={handleChange} value={text} />
      <button onClick={addItem}>Add item</button>
      <ul>
        <TransitionGroup>
          {items.map(({ text, id }) => (
            <CSSTransition
              key={id}
              classNames="example"
              timeout={{ enter: 500, exit: 300 }}
            >
              <li>
                {text} <button onClick={removeItem(id)}>remove item</button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </>
  );
};
