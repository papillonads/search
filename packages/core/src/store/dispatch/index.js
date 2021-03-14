import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import * as actionCreators from '../action/actionCreators'
import { contextSetProgressRegularThunk, contextSetProgressConsentThunk } from '../thunk/context/progress/set'

export function useBindActionCreators() {
  return bindActionCreators(
    {
      ...actionCreators,
      contextSetProgressRegularThunk,
      contextSetProgressConsentThunk,
    },
    useDispatch(),
  )
}
