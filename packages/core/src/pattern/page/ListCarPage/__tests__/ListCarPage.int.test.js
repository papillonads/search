import { async, regular } from './ListCarPage.int.story'

describe('<ListCarPage />', () => {
  describe('Render', () => {
    test('must match async()', () => {
      expect(global.renderToJSON(async())).toMatchSnapshot()
    })

    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
