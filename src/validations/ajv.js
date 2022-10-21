import Ajv from 'ajv'
import ajvErrors from 'ajv-errors'

const AJV = new Ajv({ allErrors: true })
ajvErrors(AJV, { singleError: false })
export { AJV }