import { ConfigModuleOptions } from '@nestjs/config';
import * as Joi from 'joi';

export const moduleConfigOptions: ConfigModuleOptions = {
  envFilePath: ['.env.local', '.env'],
  isGlobal: true,
  validationSchema: Joi.object({
    NODE_ENV: Joi.string()
      .valid('development', 'production', 'test')
      .default('development'),
    PORT: Joi.number().default(3000),
    DB_HOST: Joi.string(),
    DB_PORT: Joi.number().default(3306),
    DB_USERNAME: Joi.string(),
    DB_PASSWORD: Joi.string().allow(''),
    DB_NAME: Joi.string(),
  }),
};
