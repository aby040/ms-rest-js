"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
var isStream = require("is-stream");
var typeSpec_1 = require("./typeSpec");
/**
 * A type specification that describes how to validate and serialize a Stream.
 */
var streamSpec = {
    typeName: "Stream",
    serialize: function (propertyPath, value) {
        if (!isStream(value)) {
            throw new Error(typeSpec_1.createValidationErrorMessage(propertyPath, value, "a Stream"));
        }
        return value;
    }
};
exports.default = streamSpec;
//# sourceMappingURL=streamSpec.js.map