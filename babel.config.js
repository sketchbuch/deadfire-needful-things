module.exports = {
  plugins: ['@userlike/babel-plugin-joke'],
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
};