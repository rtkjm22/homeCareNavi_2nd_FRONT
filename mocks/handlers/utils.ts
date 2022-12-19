export const BASE_PATH = 'http://localhost:3000'

export const CLIENT_HEADERS = {
  'access-token': '7sbMLu90-fDnajzasuhOTQ',
  client: 'xJ-BFLHzY_XNMX_cjsQnPw',
  expiry: '1660145125',
  uid: 'Client'
}

export const MANAGER_HEADERS = { ...CLIENT_HEADERS, ...{ uid: 'Manager' } }
