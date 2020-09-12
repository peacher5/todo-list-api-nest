import * as Joi from '@hapi/joi'

export enum Config {
  PORT = 'PORT',
  APP_NAME = 'APP_NAME',
  VERSION = 'VERSION',
  COMMIT_ID = 'COMMIT_ID'
}

type ConfigKeys = { [key in keyof typeof Config]: any }

export const validationSchema = Joi.object<ConfigKeys>({
  PORT: Joi.number().required(),
  APP_NAME: Joi.string().required(),
  VERSION: Joi.string().required(),
  COMMIT_ID: Joi.string().required()
})
