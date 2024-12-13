import { Greet } from '@acme/shared-types'

const greet: Greet = (name: string) => {
  console.log(`Hello there, ${name}!`)
}

export { greet }
