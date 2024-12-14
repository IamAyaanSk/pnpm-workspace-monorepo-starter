import { Greet } from '@acme/shared-types'

const greet: Greet = (name) => {
  console.log(`Hello there, ${name}!`)
}

export { greet }
