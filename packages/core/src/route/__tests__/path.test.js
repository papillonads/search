/* eslint-disable global-require */
describe('path', () => {
  const someBaseUrl = 'fantastic-base-url'

  const extendEnvironmentVariables = () => {
    process.env.BASE_URL = someBaseUrl
  }

  const restoreEnvironmentVariables = () => {
    delete process.env.BASE_URL
  }

  const requirePath = () => require('../path')

  afterEach(() => {
    restoreEnvironmentVariables()
  })

  describe('appRootPath', () => {
    test('must return path with base url when process.env.BASE_URL is present', () => {
      jest.resetModules()
      extendEnvironmentVariables()
      const { appRootPath } = requirePath()
      expect(appRootPath).toBe(`${process.env.BASE_URL}/`)
    })

    test('must return path without base url when process.env.BASE_URL is absent', () => {
      jest.resetModules()
      const { appRootPath } = requirePath()
      expect(appRootPath).toBe('/')
    })
  })

  describe('listCarPagePath', () => {
    test('must return path with base url when process.env.BASE_URL is present', () => {
      jest.resetModules()
      extendEnvironmentVariables()
      const { listCarPagePath } = requirePath()
      expect(listCarPagePath).toBe(`${process.env.BASE_URL}/list`)
    })

    test('must return path without base url when process.env.BASE_URL is absent', () => {
      jest.resetModules()
      const { listCarPagePath } = requirePath()
      expect(listCarPagePath).toBe('/list')
    })
  })
})
/* eslint-enable global-require */
