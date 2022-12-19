type AlertState = {
  type: 'success' | 'info' | 'warning' | 'danger'
  isShow: boolean
  message: string
}

export const useAlert = () => {
  const alertState = useState<AlertState>('alertState', () => ({
    isShow: false,
    message: '',
    type: 'success'
  }))

  const alertCloseTimeoutID = useState<NodeJS.Timeout | undefined>('alertCloseTimeoutID')

  /**
   * アラート表示を表示し、5秒後に閉じる。
   * @param message アラートに表示されるメッセージ
   * @param type    アラート種別。緑の'success',青の'info',黄の'warning',赤の'danger'の四種類。
  */
  const showAlert = (message: string, type: AlertState['type']) => {
    clearTimeout(alertCloseTimeoutID.value)
    alertState.value.message = message
    alertState.value.type = type
    alertState.value.isShow = true
    alertCloseTimeoutID.value = setTimeout(() => { alertState.value.isShow = false }, 5000)
  }

  /** 強制的にアラート表示を終了させる */
  const closeAlert = () => {
    clearTimeout(alertCloseTimeoutID.value)
    alertState.value.isShow = false
  }

  return {
    alertState: readonly(alertState),
    showAlert,
    closeAlert
  }
}
