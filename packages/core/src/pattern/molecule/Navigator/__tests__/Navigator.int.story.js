import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { getAppMockStore } from '@papillonads/library/store'
import { withTests } from '@storybook/addon-jest'
import { state } from '../../../../state'
import { Navigator } from '../index'
import results from '../../../../../../../.jest-test-results.json'

const {
  mock: { appState },
} = state

export default {
  title: 'Search/Molecule/Navigator',
  component: Navigator,
  decorators: [withTests({ results })],
  parameters: { jest: ['Navigator.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
    </Provider>
  )
}
