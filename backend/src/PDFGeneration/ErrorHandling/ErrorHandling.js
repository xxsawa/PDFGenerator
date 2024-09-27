"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateInputs(res, inputs) {
    if (inputs.some(x => x == undefined)) {
        console.log("eror");
        throw new Error("Some or all values are missing.");
    }
}
exports.default = validateInputs;
