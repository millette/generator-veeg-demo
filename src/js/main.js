/* global vegaEmbed , vegaTooltip */

'use strict'

vegaEmbed('#viz', '../data/spec-lite.json', { actions: false })
  .then(function (result) {
    vegaTooltip.vegaLite(result.view, result.spec) // [, options]
  })
  .catch(console.error)
