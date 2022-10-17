import type { User } from '~/api/@types'

/** 引数に渡されたオブジェクトを検査し、合格すればUserとする */
const isUser = (userable: unknown): userable is User => {
  if (!userable || typeof userable !== 'object') { return false }

  const USER_ATTRS: Array<keyof User> =
  ['address', 'allow_password_change', 'email', 'id', 'name', 'postal', 'provider', 'tel', 'type', 'uid']

  let result = true
  Object.keys(userable).forEach((key) => {
  // @ts-ignore
    if (!USER_ATTRS.includes(key)) { result = false }
  })

  return result
}

/** セッションストレージからユーザーを取得する */
const getUserFromStorage = (): User | undefined => {
  const user = sessionStorage.getItem('user')

  if (!user) { return undefined }

  const parsedUser = JSON.parse(user)

  if (!isUser(parsedUser)) { return undefined }

  return parsedUser
}

/** セッションストレージへユーザーをセットする */
const setUserToStorage = (user: User) => {
  sessionStorage.setItem('user', JSON.stringify(user))
}

/** セッションストレージのユーザーを削除する */
const removeUserFromStorage = (): void => {
  sessionStorage.removeItem('user')
}

export default defineNuxtPlugin(() => {
  class CurrentUser {
  /** 現在のユーザー。初期値はセッションストレージから取得する */
    private _state

    constructor () {
      this._state = useState<User | undefined>('currentUser', () => {
        return getUserFromStorage()
      })
    }

    public get state () {
      return this._state
    }

    /** ユーザーをuseState及びセッションストレージにセットする */
    public setUserState (userParams: User | undefined) {
      if (!isUser(userParams)) {
        this.clearUserState()
        return
      }

      this._state.value = userParams
      setUserToStorage(userParams)
    }

    /** ユーザーを全情報から削除する */
    public clearUserState () {
      removeUserFromStorage()
      this._state.value = undefined
    }

    public get isClient () {
      return computed(() => this._state.value?.type === 'Client')
    }

    public get isManager () {
      return computed(() => this._state.value?.type === 'Manager')
    }
  }

  const user = new CurrentUser()

  return {
    provide: {
      user
    }
  }
})
