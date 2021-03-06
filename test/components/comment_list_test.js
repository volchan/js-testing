import { renderComponent, expect } from "../test_helper";
import CommentList from "../../src/components/comment_list";

describe("CommentList", () => {
  let component;

  beforeEach(() => {
    const props = {
      comments: ["New Comment", "Other New Comment"]
    };
    component = renderComponent(CommentList, null, props);
  });

  it("Has the correct class", () => {
    expect(component).to.have.class("comment-list");
  });

  it("Shows an 'li' for each comment", () => {
    expect(component.find("li").length).to.equal(2);
  });

  it("Shows each comment that is provided", () => {
    expect(component).to.contain("New Comment");
    expect(component).to.contain("Other New Comment");
  });
});
