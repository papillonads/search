/* eslint-disable import/no-dynamic-require, global-require */
const mockRequireListCarPage = () => {
  const listCarPagePath = '../../pattern/page/ListCarPage'
  jest.mock(listCarPagePath, () => 'ListCarPage')
  return require(listCarPagePath)
}

const mockRequireNotFoundPage = () => {
  const notFoundPagePath = '../../pattern/page/NotFoundPage'
  jest.mock(notFoundPagePath, () => 'NotFoundPage')
  return require(notFoundPagePath)
}

const mockRequirePath = () => {
  const pathPath = '../path'
  jest.mock(pathPath, () => ({
    appRootPath: 'fantastic-app-root-path',
    listCarPagePath: 'fantastic-list-car-page-path',
  }))
  return require(pathPath)
}

describe('index', () => {
  const path = mockRequirePath()

  const requireIndex = () => require('../index')

  describe('appRootRoute', () => {
    const expectedAppRootRoute = {
      path: path.appRootPath,
    }

    test('must return app root route object', () => {
      const { appRootRoute } = requireIndex()
      expect(appRootRoute).toEqual(expectedAppRootRoute)
    })
  })

  describe('listCarPageRoute', () => {
    const listCarPage = mockRequireListCarPage()

    const expectedListCarPageRoute = {
      path: path.listCarPagePath,
      clientComponent: listCarPage.AsyncListCarPage,
      serverComponent: listCarPage.ListCarPage,
    }

    test('must return list car page route object', () => {
      const { listCarPageRoute } = requireIndex()
      expect(listCarPageRoute).toEqual(expectedListCarPageRoute)
    })
  })

  describe('notFoundPageRoute', () => {
    const notFoundPage = mockRequireNotFoundPage()

    const expectedNotFoundPageRoute = {
      clientComponent: notFoundPage.AsyncNotFoundPage,
      serverComponent: notFoundPage.NotFoundPage,
    }

    test('must return not found page route object', () => {
      const { notFoundPageRoute } = requireIndex()
      expect(notFoundPageRoute).toEqual(expectedNotFoundPageRoute)
    })
  })
})
/* eslint-enable import/no-dynamic-require, global-require */
