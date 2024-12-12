import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient({
  transactionOptions: {
    maxWait: 6_000,
    timeout: 15_000
  },
  errorFormat: 'pretty',
  log: [
    {
      emit: 'event',
      level: 'query'
    },
    {
      emit: 'stdout',
      level: 'error'
    },
    {
      emit: 'stdout',
      level: 'info'
    },
    {
      emit: 'stdout',
      level: 'warn'
    }
  ]
})

prismaClient.$on('query', (e) => {
  if (e.duration > 1000) {
    console.error('SLOW QUERY\n', { query: e.query }, { params: e.params }, { duration: e.duration })
  }
})

export default prismaClient
