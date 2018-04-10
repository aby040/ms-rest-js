"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
var assert = require("assert");
var dateTimeSpec_1 = require("../../lib/serialization/dateTimeSpec");
describe("dateTimeSpec", function () {
    it("should have \"DateTime\" for its typeName property", function () {
        assert.strictEqual("DateTime", dateTimeSpec_1.default.typeName);
    });
    describe("serialize()", function () {
        it("should throw an error when given undefined", function () {
            try {
                dateTimeSpec_1.default.serialize(["a", "property", "path"], undefined);
                assert.fail("Expected an error to be thrown.");
            }
            catch (error) {
                assert.strictEqual(error.message, "Property a.property.path with value undefined must be an instanceof Date or a string in ISO8601 format.");
            }
        });
        it("should throw an error when given false", function () {
            try {
                dateTimeSpec_1.default.serialize(["another", "property", "path"], false);
                assert.fail("Expected an error to be thrown.");
            }
            catch (error) {
                assert.strictEqual(error.message, "Property another.property.path with value false must be an instanceof Date or a string in ISO8601 format.");
            }
        });
        it("should throw an error when given 5", function () {
            try {
                dateTimeSpec_1.default.serialize(["another", "property", "path"], 5);
                assert.fail("Expected an error to be thrown.");
            }
            catch (error) {
                assert.strictEqual(error.message, "Property another.property.path with value 5 must be an instanceof Date or a string in ISO8601 format.");
            }
        });
        it("should throw an error when given \"hello world!\"", function () {
            try {
                dateTimeSpec_1.default.serialize(["another", "property", "path"], "hello world!");
                assert.fail("Expected an error to be thrown.");
            }
            catch (error) {
                assert.strictEqual(error.message, "Property another.property.path with value \"hello world!\" must be an instanceof Date or a string in ISO8601 format.");
            }
        });
        it("should return the provided value with no error when given an ISO 8601 date string", function () {
            assert.strictEqual(dateTimeSpec_1.default.serialize(["this", "one", "works"], "2011-10-05T14:48:00.000Z"), "2011-10-05T14:48:00.000Z");
        });
        it("should return the ISO 8601 string representation of the provided value with no error when given a Date", function () {
            assert.strictEqual(dateTimeSpec_1.default.serialize(["this", "one", "works"], new Date("2011-10-05T14:48:00.000Z")), "2011-10-05T14:48:00.000Z");
        });
    });
});
//# sourceMappingURL=dateTimeSpecTests.js.map