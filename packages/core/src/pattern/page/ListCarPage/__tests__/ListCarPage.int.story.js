import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { getAppMockStore } from '@papillonads/library/store'
import { withTests } from '@storybook/addon-jest'
import { state } from '../../../../state'
import { AsyncListCarPage } from '../AsyncListCarPage'
import { ListCarPage } from '../ListCarPage'
import results from '../../../../../../../.jest-test-results.json'

const {
  mock: { appState },
} = state

export default {
  title: 'Search/Page/ListCarPage',
  component: ListCarPage,
  decorators: [withTests({ results })],
  parameters: { jest: ['ListCarPage.int.test.js'] },
  excludeStories: ['custom'],
}

export function async() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <BrowserRouter>
        <AsyncListCarPage />
      </BrowserRouter>
    </Provider>
  )
}

export function regular() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <BrowserRouter>
        <ListCarPage />
      </BrowserRouter>
    </Provider>
  )
}
