import { AJV } from '../ajv.js'

export const loginSchema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      minLength: 1
    },
    password: {
      type: 'string',
      minLength: 1
    }
  },
  required: ['username', 'password'],
  additionalProperties: false,
  errorMessage: {
    properties: {
      username: 'password or username must be complete or data invalid',
      password: 'password or username must be complete or data invalid',
    },
    type: 'The fields must be strings',
    additionalProperties: 'Data recieved is invalid',
  },
}

const validate = AJV.compile(loginSchema)

const valid = validate(data)
// .filter(e => e !== '')


// const mapped = validate.errors.map(e => e.message).filter(e => e !== '')
// // const mappe = validate.errors.map(e => e.instancePath)
// const mappe = validate.errors.map(e => e.instancePath).filter(e => e !== '')
// console.log(mapped)
// console.log(mappe.map(e => e.split('/')[1].trim()))
console.log(validate.errors[0].message)
