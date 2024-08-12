// Using Joi as a body validator and validating balance for slot machine route

import Joi from "joi";

const slotMachineSchema = Joi.object({
  balance: Joi.number().min(0).required(),
});

export const validateSlotMachine = (data: any) => {
  return slotMachineSchema.validate(data);
};
