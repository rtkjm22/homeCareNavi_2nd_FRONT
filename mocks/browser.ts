import { setupWorker } from 'msw'
import { auth } from './handlers/auth'
import { officeSearch } from './handlers/office_search'

export const worker = setupWorker(...auth, ...officeSearch)
