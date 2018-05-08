import { renderComponent, expect } from "../test_helper";
import CommentBox from "../../src/components/comment_box";

describe("CommentBox", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it("Has the correct class", () => {
    expect(component).to.have.class("comment-box");
  });

  it("Has a text area", () => {
    expect(component.find("textarea")).to.exist;
  });

  it("Has a button", () => {
    expect(component.find("button")).to.exist;
  });

  describe("Entering some text", () => {
    it("Shows that text in the text area", () => {

    });

    it("When submitted, clears the input", () => {

    });
  });
});
