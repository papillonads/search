import { async, regular } from './NotFoundPage.int.story'

jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

describe('<NotFoundPage />', () => {
  afterEach(() => jest.clearAllMocks())

  describe('Render', () => {
    test('must match async', () => {
      expect(global.renderToJSON(async())).toMatchSnapshot()
    })

    test('must match regular', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
