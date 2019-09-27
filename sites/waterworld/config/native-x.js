const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'card', id: '5cdb1903f41dfb0001fb2ea7' },
    { name: 'list2', id: '5cdb1903f41dfb0001fb2ea7' },
    { name: 'list1', id: '5cdb1903f41dfb0001fb2ea7' },
  ])
  .setAliasPlacements('municipal', [
    { name: 'card', id: '5cdb16baf41dfb0001fac272' },
    { name: 'list2', id: '5cdb16baf41dfb0001fac272' },
    { name: 'list1', id: '5cdb16baf41dfb0001fac272' },
  ])
  .setAliasPlacements('municipal/technologies', [
    { name: 'card', id: '5cdb171639937800010c9aff' },
    { name: 'list2', id: '5cdb171639937800010c9aff' },
    { name: 'list1', id: '5cdb171639937800010c9aff' },
  ])
  .setAliasPlacements('industrial', [
    { name: 'card', id: '5cdb16e039937800010c9211' },
    { name: 'list2', id: '5cdb16e039937800010c9211' },
    { name: 'list1', id: '5cdb16e039937800010c9211' },
  ])
  .setAliasPlacements('international', [
    { name: 'card', id: '5cdb16fe39937800010c96d0' },
    { name: 'list2', id: '5cdb16fe39937800010c96d0' },
    { name: 'list1', id: '5cdb16fe39937800010c96d0' },
  ]);

module.exports = config;
