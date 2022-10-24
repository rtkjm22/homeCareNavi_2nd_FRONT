type AlertStatus = {
  type: 'success' | 'info' | 'warning' | 'danger'
  isShow: boolean
  message: string
}

export const useUI = () => {
  const alert = {
    state: useState<AlertStatus>('alertState', () => ({
      isShow: false,
      message: '',
      type: 'success'
    })),

    closeTimeoutID: useState<NodeJS.Timeout | undefined>(),

    showAlert: (message: string, type: AlertStatus['type']) => {
      clearTimeout(alert.closeTimeoutID.value)
      alert.state.value.message = message
      alert.state.value.type = type
      alert.state.value.isShow = true
      alert.closeTimeoutID.value = setTimeout(() => { alert.state.value.isShow = false }, 5000)
    }
  }

  return {
    alert
  }
}
