const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'FCN' });

config.lazyLoad = {
  enabled: true, // set to true to enable lazy loading
  fetchMarginPercent: 100, // fetch ad when one viewport away
  renderMarginPercent: 50, // render ad when half viewport away
  mobileScaling: 2, // double these on mobile
};

config
  .setTemplate('LB1', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('LB2', {
    size: [[970, 90], [970, 66], [728, 90], [320, 50], [300, 50]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50]] },
    ],
  })
  .setTemplate('LB2', {
    size: [[970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('RAIL1', { size: [300, 250] })
  .setTemplate('RAIL2', { size: [300, 600] })
  .setTemplate('LM', { size: [[300, 250], [300, 600]] });

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
  .setAliasAdUnits('instrumentation', [
    { name: 'lb1', templateName: 'LB1', path: 'instrumentation/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'instrumentation/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'instrumentation/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'instrumentation/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'instrumentation/load-more' },
    { name: 'reskin', path: 'instrumentation/reskin' },
    { name: 'wa', path: 'instrumentation/wa' },
  ])
  .setAliasAdUnits('valves-actuators', [
    { name: 'lb1', templateName: 'LB1', path: 'valves-actuators/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'valves-actuators/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'valves-actuators/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'valves-actuators/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'valves-actuators/load-more' },
    { name: 'reskin', path: 'valves-actuators/reskin' },
    { name: 'wa', path: 'valves-actuators/wa' },
  ])
  .setAliasAdUnits('bearings-seals', [
    { name: 'lb1', templateName: 'LB1', path: 'bearings-seals/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'bearings-seals/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'bearings-seals/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'bearings-seals/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'bearings-seals/load-more' },
    { name: 'reskin', path: 'bearings-seals/reskin' },
    { name: 'wa', path: 'bearings-seals/wa' },
  ])
  .setAliasAdUnits('piping-tubing-hosing', [
    { name: 'lb1', templateName: 'LB1', path: 'piping-tubing-hosing/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'piping-tubing-hosing/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'piping-tubing-hosing/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'piping-tubing-hosing/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'piping-tubing-hosing/load-more' },
    { name: 'reskin', path: 'piping-tubing-hosing/reskin' },
    { name: 'wa', path: 'piping-tubing-hosing/wa' },
  ])
  .setAliasAdUnits('process-control-automation', [
    { name: 'lb1', templateName: 'LB1', path: 'process-control-automation/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'process-control-automation/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'process-control-automation/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'process-control-automation/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'process-control-automation/load-more' },
    { name: 'reskin', path: 'process-control-automation/reskin' },
    { name: 'wa', path: 'process-control-automation/wa' },
  ])
  .setAliasAdUnits('pumps-motors-drives', [
    { name: 'lb1', templateName: 'LB1', path: 'pumps-motors-drives/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'pumps-motors-drives/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'pumps-motors-drives/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'pumps-motors-drives/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'pumps-motors-drives/load-more' },
    { name: 'reskin', path: 'pumps-motors-drives/reskin' },
    { name: 'wa', path: 'pumps-motors-drives/wa' },
  ])
  .setAliasAdUnits('pumps-motors-drives', [
    { name: 'lb1', templateName: 'LB1', path: 'pumps-motors-drives/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'pumps-motors-drives/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'pumps-motors-drives/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'pumps-motors-drives/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'pumps-motors-drives/load-more' },
    { name: 'reskin', path: 'pumps-motors-drives/reskin' },
    { name: 'wa', path: 'pumps-motors-drives/wa' },
  ])
  .setAliasAdUnits('industry-applications', [
    { name: 'lb1', templateName: 'LB1', path: 'industry-applications/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'industry-applications/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'industry-applications/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'industry-applications/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'industry-applications/load-more' },
    { name: 'reskin', path: 'industry-applications/reskin' },
    { name: 'wa', path: 'industry-applications/wa' },
  ]);

module.exports = config;
