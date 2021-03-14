import { useSelector } from 'react-redux'
import { useBindActionCreators } from '../../../store/dispatch'

export function useNavigatorState() {
  const { contextSetNavigationAction } = useBindActionCreators()

  const navigation = useSelector(({ context }) => context.navigation)
  const progress = useSelector(({ context }) => context.progress)

  /* istanbul ignore next */
  function navigationTabNavOnClick(newNavigation) {
    contextSetNavigationAction(newNavigation)
  }

  return {
    navigation,
    progress,
    navigationTabNavOnClick,
  }
}
