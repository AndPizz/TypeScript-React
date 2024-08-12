"use strict";
// Using Joi as a body validator and validating balance for slot machine route
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSlotMachine = void 0;
const joi_1 = __importDefault(require("joi"));
const slotMachineSchema = joi_1.default.object({
    balance: joi_1.default.number().min(0).required(),
});
const validateSlotMachine = (data) => {
    return slotMachineSchema.validate(data);
};
exports.validateSlotMachine = validateSlotMachine;
