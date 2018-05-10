import jsdom from "jsdom";
import jquery from "jquery";
import ReactDom from "react-dom";
import TestUtils from "react-dom/test-utils";

global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.window = global.document.defaultView;
const $ = jquery(global.window);

const renderComponent = ComponentClass => {
  const componentInstance = TestUtils.renderIntoDocument(<ComponentClass />);

  return $(ReactDom.findDOMNode(componentInstance));
};
