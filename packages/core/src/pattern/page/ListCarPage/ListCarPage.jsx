import { ListCarTemplate } from '../../template/ListCarTemplate'
import { defaultProps, propTypes } from './ListCarPage.prop'

export function ListCarPage() {
  return <ListCarTemplate />
}

ListCarPage.defaultProps = defaultProps

ListCarPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default ListCarPage
