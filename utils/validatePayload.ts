import { SchemaOptions, celebrate } from 'celebrate';

export const validatePayload = (validationSchema: SchemaOptions) =>
  celebrate(validationSchema, { allowUnknown: true });
