/* eslint-disable import/no-import-module-exports */
import { createStore } from 'redux'
import { state } from '../state'
import { Store } from './base'
import { getAppReducer } from './reducer'
import { appRootPath, startPagePath } from '../route/path'
import { isRunningOnLocalHost } from '../library/environment/host'

export class AppStore extends Store {
  constructor() {
    super()

    this.isRunningOnLocalHost = isRunningOnLocalHost

    this.setAppDefaultState()
    this.alignContextNavigation()
    this.setAppStore()
    this.setHotModuleReloading()
  }

  /* istanbul ignore next */
  alignContextNavigation() {
    this.appState.context.navigation = {
      ...this.appState.context.navigation,
      items: this.appState.context.navigation.items.map((navigationItem) => ({
        ...navigationItem,
        isSelected:
          window.location.pathname === appRootPath
            ? navigationItem.link.props.to === startPagePath
            : navigationItem.link.props.to === window.location.pathname,
      })),
    }
  }

  /* istanbul ignore next */
  setAppDefaultState() {
    this.appState = state.default.appState
  }

  /* istanbul ignore next */
  setAppStore() {
    this.appReducer = getAppReducer()
    this.clientAppStore = this.clientAppStore || createStore(this.appReducer, this.appState, this.enhancer)

    if (typeof window === 'object' && this.isRunningOnLocalHost) {
      window.clientStore = this.clientAppStore
    }
  }

  /* istanbul ignore next */
  setHotModuleReloading() {
    if (module.hot) {
      module.hot.accept(['./reducer'], () => {
        const nextAppReducer = this.appReducer.default
        this.clientAppStore.replaceReducer(nextAppReducer)
      })
    }
  }
}

export const { clientAppStore } = new AppStore()
