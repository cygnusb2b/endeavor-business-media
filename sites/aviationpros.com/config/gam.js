const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'Aviation' });

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
    { name: 'ms', templateName: 'MS', path: 'default/ms' },
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
  .setAliasAdUnits('aircraft', [
    { name: 'lb1', templateName: 'LB1', path: 'aircraft/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'aircraft/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'aircraft/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'aircraft/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'aircraft/load-more' },
    { name: 'reskin', path: 'aircraft/reskin' },
  ])
  .setAliasAdUnits('engines-components', [
    { name: 'lb1', templateName: 'LB1', path: 'engines-components/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'engines-components/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'engines-components/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'engines-components/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'engines-components/load-more' },
    { name: 'reskin', path: 'engines-components/reskin' },
  ])
  .setAliasAdUnits('tools-equipment', [
    { name: 'lb1', templateName: 'LB1', path: 'tools-equipment/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'tools-equipment/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'tools-equipment/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'tools-equipment/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'tools-equipment/load-more' },
    { name: 'reskin', path: 'tools-equipment/reskin' },
  ])
  .setAliasAdUnits('education-training', [
    { name: 'lb1', templateName: 'LB1', path: 'education-training/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'education-training/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'education-training/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'education-training/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'education-training/load-more' },
    { name: 'reskin', path: 'education-training/reskin' },
  ])
  .setAliasAdUnits('airports', [
    { name: 'lb1', templateName: 'LB1', path: 'airports/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'airports/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'airports/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'airports/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'airports/load-more' },
    { name: 'reskin', path: 'airports/reskin' },
  ])
  .setAliasAdUnits('aviation-security', [
    { name: 'lb1', templateName: 'LB1', path: 'aviation-security/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'aviation-security/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'aviation-security/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'aviation-security/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'aviation-security/load-more' },
    { name: 'reskin', path: 'aviation-security/reskin' },
  ])
  .setAliasAdUnits('aoa', [
    { name: 'lb1', templateName: 'LB1', path: 'aoa/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'aoa/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'aoa/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'aoa/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'aoa/load-more' },
    { name: 'reskin', path: 'aoa/reskin' },
  ])
  .setAliasAdUnits('fbos-tenants', [
    { name: 'lb1', templateName: 'LB1', path: 'fbos-tenants/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'fbos-tenants/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'fbos-tenants/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'fbos-tenants/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'fbos-tenants/load-more' },
    { name: 'reskin', path: 'fbos-tenants/reskin' },
  ])
  .setAliasAdUnits('airlines', [
    { name: 'lb1', templateName: 'LB1', path: 'airlines/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'airlines/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'airlines/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'airlines/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'airlines/load-more' },
    { name: 'reskin', path: 'airlines/reskin' },
  ])
  .setAliasAdUnits('ground-handling', [
    { name: 'lb1', templateName: 'LB1', path: 'ground-handling/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'ground-handling/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'ground-handling/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'ground-handling/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'ground-handling/load-more' },
    { name: 'reskin', path: 'ground-handling/reskin' },
  ])
  .setAliasAdUnits('gse', [
    { name: 'lb1', templateName: 'LB1', path: 'gse/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'gse/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'gse/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'gse/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'gse/load-more' },
    { name: 'reskin', path: 'gse/reskin' },
  ]);

module.exports = config;
