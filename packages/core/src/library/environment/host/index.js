export const currentHost = window.location.href?.split('://')?.[1]?.split('-')?.[0]?.split(':')?.[0]

export const localHost = 'localhost'

export const isRunningOnLocalHost = currentHost === localHost
