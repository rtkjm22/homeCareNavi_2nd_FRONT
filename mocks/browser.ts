import { setupWorker } from 'msw'
import { auth } from './handlers/auth'
import { officeSearch } from './handlers/office_search'
import { reserves } from './handlers/reserves'

export const worker = setupWorker(...auth, ...officeSearch, ...reserves)
