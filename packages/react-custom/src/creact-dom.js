import CReact from "./creact";
import * as snabbdom from "snabbdom";
import { propsModule, eventListenersModule } from "snabbdom";

const reconcile = snabbdom.init([propsModule, eventListenersModule]);

let rootVNode;

const render = (el, rootDomElement) => {
  if (rootVNode == null) rootVNode = rootDomElement;

  rootVNode = reconcile(rootVNode, el);
};

const createRoot = (rootDomElement) => {
  return {
    render: (element) => {},
  };
};

CReact.__updater = (componentInstance) => {
  const oldVNode = componentInstance.__vNode;

  const newVNode = componentInstance.render();

  componentInstance.__vNode = reconcile(oldVNode, newVNode);
};

const CReactDom = {
  createRoot,
  render,
};

export default CReactDom;
