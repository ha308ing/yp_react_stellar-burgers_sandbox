import { h } from "snabbdom";

const createElement = (tag, props = {}, ...children) => {
  children = children.flat();

  props = props || {};

  let dataProps = {};
  let eventProps = {};

  for (let prop in props) {
    if (prop.startsWith("on")) {
      const event = prop.substring(2).toLowerCase();
      eventProps[event] = props[prop];
    } else {
      dataProps[prop] = props[prop];
    }
  }

  if (tag.prototype && tag.prototype.isCReactClassComponent) {
    const componentInstance = new tag(props);

    componentInstance.__vNode = componentInstance.render();

    componentInstance.__vNode.data.hook = {
      create: () => {
        componentInstance.componentDidMount();
      },
    };

    return componentInstance.__vNode;
  }
  if (typeof tag == "function") return tag(props);
  return h(tag, { props: dataProps, on: eventProps }, children);
};

class Component {
  constructor() {}

  componentDidMount() {}

  setState(partialState) {
    this.state = {
      ...this.state,
      ...partialState,
    };

    CReact.__updater(this);
  }

  render() {}
}

Component.prototype.isCReactClassComponent = true;

const CReact = {
  createElement,
  Component,
};

export default CReact;
