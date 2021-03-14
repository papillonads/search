import { messageType } from '../../../library/constant'
import { alertTextApp } from '../../../library/constant/alertText/app'

export const progress = {
  message: {
    text: alertTextApp.ready,
    type: messageType.success,
  },
  isLoading: false,
}
