import { Counter } from "./counter";
import CReact from "./creact";
import CReactDom from "./creact-dom";
import { Greeting } from "./greeting";

const people = ["sam", "tom", "ben"];

const App = (
  <div>
    <h1 className="primary">Hello</h1>
    <p>How is it going</p>
    <Greeting name="Peter" />
    <ul>
      {people.map((name) => (
        <li>hi, {name}</li>
      ))}
    </ul>

    <Counter />
  </div>
);

CReactDom.render(App, document.getElementById("root"));
