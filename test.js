import ajv from "ajv"
import { readFile } from "fs"

const schemas = [{}]

const val = new ajv({ allErrors: true, async: true, strict: false, schemas })

console.log(schemas)

const validate = val.compile(true)

const data = {
	foo: 1,
	bar: "abc"
}

const valid = validate(data)
if (!valid) {
	throw validate.errors
}
