module.exports = {
    overrides: [
      {
        files: ['src/service-worker.js'],
        rules: {
          'no-restricted-globals': 'off',
        },
      },
    ],
  };
  