const configureNativeX = require('@endeavor-business-media/package-shared/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5b55ea8304bce80001980611' },
  ])
  .setAliasPlacements('shop-operations', [
    { name: 'default', id: '5b57585b07cd7000019c5fb6' },
  ])
  .setAliasPlacements('industry-news', [
    { name: 'default', id: '5b57587e5bbf91000134a2c2' },
  ])
  .setAliasPlacements('collision-repair', [
    { name: 'default', id: '' },
  ])
  .setAliasPlacements('service-repair', [
    { name: 'default', id: '' },
  ])
  .setAliasPlacements('distribution', [
    { name: 'default', id: '' },
  ])
  .setAliasPlacements('training-and-resources', [
    { name: 'default', id: '' },
  ]);

module.exports = config;
