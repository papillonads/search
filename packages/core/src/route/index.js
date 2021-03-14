import { AsyncListCarPage, ListCarPage } from '../pattern/page/ListCarPage'
import { AsyncNotFoundPage, NotFoundPage } from '../pattern/page/NotFoundPage'
import { appRootPath, listCarPagePath } from './path'

export const appRootRoute = {
  path: appRootPath,
  exact: true,
}

export const listCarPageRoute = {
  path: listCarPagePath,
  exact: true,
  clientComponent: AsyncListCarPage,
  serverComponent: ListCarPage,
}

export const notFoundPageRoute = {
  clientComponent: AsyncNotFoundPage,
  serverComponent: NotFoundPage,
}
