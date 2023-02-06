import {assert} from "chai";
import House from "../../../src/house/domain/House";

describe(
    "House test suite", () => {
        it("should throw error when create house with empty name", () => {
            assert.throw(() => new House(''));
        });
        it("should throw error when create house with null name", () => {
            assert.throw(() => new House(null));
        });
    }
);