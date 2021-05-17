import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../../action/actionCreators'
import { timeout as timeoutDefault, messageType } from '../../../../../library/constant'
import { alertTextApp } from '../../../../../library/constant/alertText/app'

export const contextSetProgressRegularThunk =
  ({ message: { text, type }, isLoading = false, timeout = timeoutDefault.alert }) =>
  async (dispatch) => {
    const { contextSetProgressAction } = bindActionCreators(actionCreators, dispatch)

    contextSetProgressAction({ message: { text, type }, isLoading })

    if (type !== messageType.error) {
      setTimeout(() => {
        contextSetProgressAction({ message: { text: alertTextApp.ready, type: messageType.success }, isLoading: false })
      }, timeout)
    }
  }

export const contextSetProgressConsentThunk =
  ({ message: { text, type }, isLoading, consent }) =>
  async (dispatch) => {
    const { contextSetProgressAction } = bindActionCreators(actionCreators, dispatch)

    const {
      action: { approve, cancel },
      withInput,
    } = consent

    contextSetProgressAction({ message: { text, type }, isLoading, consent: { action: { approve, cancel }, withInput } })
  }
