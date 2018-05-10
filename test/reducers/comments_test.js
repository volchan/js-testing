import { expect } from "../test_helper";
import commentReducer from "../../src/reducers/comments";
import { SAVE_COMMENT } from "../../src/actions/types";

describe("Comment Reducer", () => {
  it("Handles action with unknown type", () => {
    expect(commentReducer()).to.eql([]);
  });

  it("Handles actions of type 'SAVE_COMMENT'", () => {
    const action = { type: SAVE_COMMENT, payload: "New Comment" };
    expect(commentReducer([], action)).to.eql(["New Comment"]);
  });
});
