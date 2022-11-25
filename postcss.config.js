// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      selectorBlackList :['location','BMap_stdMpZoom BMap_noprint anchorBR','BMap_smcbg in' ]
    },
  },
};
