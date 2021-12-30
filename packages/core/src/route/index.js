import { AsyncListCarPage, ListCarPage } from '../pattern/page/ListCarPage'
import { AsyncNotFoundPage, NotFoundPage } from '../pattern/page/NotFoundPage'
import { appRootPath, listCarPagePath } from './path'

export const appRootRoute = {
  path: appRootPath,
}

export const listCarPageRoute = {
  path: listCarPagePath,
  clientComponent: AsyncListCarPage,
  serverComponent: ListCarPage,
}

export const notFoundPageRoute = {
  clientComponent: AsyncNotFoundPage,
  serverComponent: NotFoundPage,
}
