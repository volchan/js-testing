import { expect } from "../test_helper";
import { saveComment } from "../../src/actions";
import { SAVE_COMMENT } from "../../src/actions/types";

describe("Actions:", () => {
  describe("saveComment:", () => {
    it("Has the correct type.", () => {
      const action = saveComment();
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it("Has the correct payload.", () => {
      const action = saveComment("New Comment");
      expect(action.payload).to.equal("New Comment");
    });
  });
});
