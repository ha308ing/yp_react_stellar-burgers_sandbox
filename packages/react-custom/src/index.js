import { Counter } from "./counter";
import CReact from "./creact";
import CReactDom from "./creact-dom";
import { Greeting } from "./greeting";

const App = (
  <div>
    <h1 className="primary">Hello</h1>
    <p>How is it going</p>
    <Greeting name="Peter" />
    <Counter />
  </div>
);

CReactDom.render(App, document.getElementById("root"));
