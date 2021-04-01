import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './ListCarPage.prop'

const LazyListCarPage = lazy(() => import('./ListCarPage'))

export function AsyncListCarPage() {
  return (
    <Suspense fallback={null}>
      <LazyListCarPage />
    </Suspense>
  )
}

AsyncListCarPage.defaultProps = defaultProps

AsyncListCarPage.propTypes = propTypes
