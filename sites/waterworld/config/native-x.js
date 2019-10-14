const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5cdb1903f41dfb0001fb2ea7' },
  ])
  .setAliasPlacements('municipal', [
    { name: 'default', id: '5cdb16baf41dfb0001fac272' },
  ])
  .setAliasPlacements('municipal/technologies', [
    { name: 'default', id: '5cdb171639937800010c9aff' },
  ])
  .setAliasPlacements('industrial', [
    { name: 'default', id: '5cdb16e039937800010c9211' },
  ])
  .setAliasPlacements('international', [
    { name: 'default', id: '5cdb16fe39937800010c96d0' },
  ]);

module.exports = config;
