import { regular } from './NotFoundTemplate.int.story'

jest.mock('react-router-dom', () => ({
  Link: () => <div />,
}))

describe('<NotFoundTemplate />', () => {
  describe('Render', () => {
    test('must match regular', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
