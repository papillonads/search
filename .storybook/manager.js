import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'
import { version } from '../lerna.json'

addons.setConfig({
  panelPosition: 'right',
  theme: create({
    base: 'light',
    brandTitle: `Search v${version}`,
    brandUrl: 'https://github.com/papillonads/search',
    brandImage: 'https://avatars2.githubusercontent.com/u/47340326',
  }),
})
