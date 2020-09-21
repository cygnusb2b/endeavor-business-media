const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'LW' });

config.lazyLoad = {
  enabled: true, // set to true to enable lazy loading
  fetchMarginPercent: 100, // fetch ad when one viewport away
  renderMarginPercent: 50, // render ad when half viewport away
  mobileScaling: 2, // double these on mobile
};

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB1', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'default/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'default/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'default/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'default/load-more' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('covid-19', [
    { name: 'lb1', templateName: 'LB1', path: 'covid-19/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'covid-19/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'covid-19/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'covid-19/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'covid-19/load-more' },
    { name: 'reskin', path: 'covid-19/reskin' },
  ])
  .setAliasAdUnits('network-design', [
    { name: 'lb1', templateName: 'LB1', path: 'network-design/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'network-design/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'network-design/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'network-design/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'network-design/load-more' },
    { name: 'reskin', path: 'network-design/reskin' },
  ])
  .setAliasAdUnits('fttx', [
    { name: 'lb1', templateName: 'LB1', path: 'fttx/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'fttx/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'fttx/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'fttx/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'fttx/load-more' },
    { name: 'reskin', path: 'fttx/reskin' },
  ])
  .setAliasAdUnits('sdn-nfv', [
    { name: 'lb1', templateName: 'LB1', path: 'sdn-nfv/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'sdn-nfv/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'sdn-nfv/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'sdn-nfv/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'sdn-nfv/load-more' },
    { name: 'reskin', path: 'sdn-nfv/reskin' },
  ])
  .setAliasAdUnits('data-center', [
    { name: 'lb1', templateName: 'LB1', path: 'data-center/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'data-center/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'data-center/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'data-center/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'data-center/load-more' },
    { name: 'reskin', path: 'data-center/reskin' },
  ])
  .setAliasAdUnits('test', [
    { name: 'lb1', templateName: 'LB1', path: 'test/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'test/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'test/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'test/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'test/load-more' },
    { name: 'reskin', path: 'test/reskin' },
  ])
  .setAliasAdUnits('network-automation', [
    { name: 'lb1', templateName: 'LB1', path: 'network-automation/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'network-automation/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'network-automation/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'network-automation/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'network-automation/load-more' },
    { name: 'reskin', path: 'network-automation/reskin' },
  ])
  .setAliasAdUnits('5g-mobile', [
    { name: 'lb1', templateName: 'LB1', path: '5g-mobile/lb1' },
    { name: 'lb2', templateName: 'LB2', path: '5g-mobile/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: '5g-mobile/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: '5g-mobile/rail2' },
    { name: 'load-more', templateName: 'LM', path: '5g-mobile/load-more' },
    { name: 'reskin', path: '5g-mobile/reskin' },
  ])
  .setAliasAdUnits('test-measurement', [
    { name: 'lb1', templateName: 'LB1', path: 'test-measurement/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'test-measurement/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'test-measurement/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'test-measurement/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'test-measurement/load-more' },
    { name: 'reskin', path: 'test-measurement/reskin' },
  ]);

module.exports = config;
