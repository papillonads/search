import { BrowserRouter } from 'react-router-dom'
import { withTests } from '@storybook/addon-jest'
import { AsyncNotFoundPage } from '../AsyncNotFoundPage'
import { NotFoundPage } from '../NotFoundPage'
import results from '../../../../../../../.jest-test-results.json'

const location = {
  pathname: 'fantastic-path-name',
}

export default {
  title: 'Search/Page/NotFoundPage',
  component: NotFoundPage,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
    withTests({ results }),
  ],
  parameters: { jest: ['NotFoundPage.int.test.js'] },
  excludeStories: ['custom'],
}

export function async() {
  return <AsyncNotFoundPage location={location} />
}

export function regular() {
  return <NotFoundPage location={location} />
}
