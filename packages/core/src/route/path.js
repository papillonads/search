const rootPath = '/'
const listCarPath = '/list'

export const appRootPath = process.env.BASE_URL ? `${process.env.BASE_URL}${rootPath}` : rootPath
export const listCarPagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${listCarPath}` : listCarPath

export const startPagePath = listCarPagePath
