import * as hosts from '../index'

describe('index', () => {
  afterEach(() => jest.resetModules())

  const localhostHref = 'https://localhost'
  const elsewhereHref = 'https://elsewhere'

  describe('hosts and indicators', () => {
    test('must return all hosts and indicators', () => {
      expect(hosts).toHaveProperty('currentHost')
      expect(hosts).toHaveProperty('localHost')
      expect(hosts).toHaveProperty('isRunningOnLocalHost')
    })
  })

  describe('currentHost', () => {
    test('must equal localhost when running on localhost', async () => {
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({ href: localhostHref }))

      const { currentHost, localHost } = await import('../index')
      expect(currentHost).toEqual(localHost)
    })

    test('must equal elsewhere host when running elsewhere', async () => {
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({ href: elsewhereHref }))

      const { currentHost } = await import('../index')
      expect(currentHost).toEqual('elsewhere')
    })
  })

  describe('isRunningOnLocalHost', () => {
    test('must be truthy when running on localhost', async () => {
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({ href: localhostHref }))

      const isRunningOnLocalHost = await import('../index')
      expect(isRunningOnLocalHost).toBeTruthy()
    })

    test('must be falsy when running elsewhere', async () => {
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({ href: elsewhereHref }))

      const { isRunningOnLocalHost } = await import('../index')
      expect(isRunningOnLocalHost).toBeFalsy()
    })
  })
})
