const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@src': 'src',
    '@pages': 'src/pages',
    '@components': 'src/components',
    '@hooks': 'src/hooks',
    '@context': 'src/context',
    '@public': 'public',
    '@static': 'src/static',
  })(config);

  return config;
};