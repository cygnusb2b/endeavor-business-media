const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'card', id: '5d96036066f22a000172bd75' },
    { name: 'list2', id: '5d96036066f22a000172bd75' },
    { name: 'list1', id: '5d96036066f22a000172bd75' },
  ])
  .setAliasPlacements('process-water', [
    { name: 'card', id: '5d960375da2aa1000117e542' },
    { name: 'list2', id: '5d960375da2aa1000117e542' },
    { name: 'list1', id: '5d960375da2aa1000117e542' },
  ])
  .setAliasPlacements('wastewater', [
    { name: 'card', id: '5d9608c866f22a0001753b1d' },
    { name: 'list2', id: '5d9608c866f22a0001753b1d' },
    { name: 'list1', id: '5d9608c866f22a0001753b1d' },
  ])
  .setAliasPlacements('water-reuse', [
    { name: 'card', id: '5d9608d4da2aa100011a5f26' },
    { name: 'list2', id: '5d9608d4da2aa100011a5f26' },
    { name: 'list1', id: '5d9608d4da2aa100011a5f26' },
  ])
  .setAliasPlacements('produced-water', [
    { name: 'card', id: '5d9608e0da2aa100011a6543' },
    { name: 'list2', id: '5d9608e0da2aa100011a6543' },
    { name: 'list1', id: '5d9608e0da2aa100011a6543' },
  ])
  .setAliasPlacements('industry', [
    { name: 'card', id: '5d9608ef66f22a0001754d41' },
    { name: 'list2', id: '5d9608ef66f22a0001754d41' },
    { name: 'list1', id: '5d9608ef66f22a0001754d41' },
  ]);

module.exports = config;
