import React from 'react'
import { defaultProps, propTypes } from './ListCarPage.prop'

const LazyListCarPage = React.lazy(() => import('./ListCarPage'))

export function AsyncListCarPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyListCarPage />
    </React.Suspense>
  )
}

AsyncListCarPage.defaultProps = defaultProps

AsyncListCarPage.propTypes = propTypes
