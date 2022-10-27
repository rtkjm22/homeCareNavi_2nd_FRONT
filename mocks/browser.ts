import { setupWorker } from 'msw'
import { auth } from './handlers/auth'

export const worker = setupWorker(...auth)
