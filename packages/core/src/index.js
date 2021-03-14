/* eslint-disable global-require */

require('@babel/register')({
  extensions: ['.js', '.jsx'],
  ignore: [],
})

require('whatwg-fetch')

require('./clientRenderApp')

/* eslint-enable global-require */
