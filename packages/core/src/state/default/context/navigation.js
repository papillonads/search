import { Link } from 'react-router-dom'
import { pageContent } from '../../../library/constant'

import { listCarPagePath } from '../../../route/path'

export const navigation = {
  ariaAttr: {
    label: pageContent.listCar.contextNavigationItemText,
    current: 'page',
  },
  items: [
    {
      link: {
        component: Link,
        props: { ...{ to: listCarPagePath } },
        children: pageContent.listCar.contextNavigationItemText,
      },
      isSelected: true,
      enabled: true,
      visible: true,
    },
  ],
}
