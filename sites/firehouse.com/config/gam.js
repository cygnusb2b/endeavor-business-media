const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'Firehouse' });

config
  .setTemplate('LB', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
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
    { name: 'lb1', templateName: 'LB', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'default/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'default/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'default/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'default/load-more' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('leadership', [
    { name: 'lb1', templateName: 'LB', path: 'leadership/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'leadership/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'leadership/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'leadership/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'leadership/load-more' },
    { name: 'reskin', path: 'leadership/reskin' },
  ])
  .setAliasAdUnits('apparatus', [
    { name: 'lb1', templateName: 'LB', path: 'apparatus/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'apparatus/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'apparatus/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'apparatus/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'apparatus/load-more' },
    { name: 'reskin', path: 'apparatus/reskin' },
  ])
  .setAliasAdUnits('rescue', [
    { name: 'lb1', templateName: 'LB', path: 'rescue/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'rescue/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'rescue/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'rescue/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'rescue/load-more' },
    { name: 'reskin', path: 'rescue/reskin' },
  ])
  .setAliasAdUnits('safety-health', [
    { name: 'lb1', templateName: 'LB', path: 'safety-health/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'safety-health/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'safety-health/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'safety-health/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'safety-health/load-more' },
    { name: 'reskin', path: 'safety-health/reskin' },
  ])
  .setAliasAdUnits('operations-training', [
    { name: 'lb1', templateName: 'LB', path: 'operations-training/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'operations-training/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'operations-training/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'operations-training/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'operations-training/load-more' },
    { name: 'reskin', path: 'operations-training/reskin' },
  ])
  .setAliasAdUnits('careers-education', [
    { name: 'lb1', templateName: 'LB', path: 'careers-education/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'careers-education/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'careers-education/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'careers-education/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'careers-education/load-more' },
    { name: 'reskin', path: 'careers-education/reskin' },
  ])
  .setAliasAdUnits('prevention-investigation', [
    { name: 'lb1', templateName: 'LB', path: 'prevention-investigation/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'prevention-investigation/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'prevention-investigation/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'prevention-investigation/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'prevention-investigation/load-more' },
    { name: 'reskin', path: 'prevention-investigation/reskin' },
  ])
  .setAliasAdUnits('tech-comm', [
    { name: 'lb1', templateName: 'LB', path: 'tech-comm/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'tech-comm/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'tech-comm/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'tech-comm/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'tech-comm/load-more' },
    { name: 'reskin', path: 'tech-comm/reskin' },
  ])
  .setAliasAdUnits('stations', [
    { name: 'lb1', templateName: 'LB', path: 'stations/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'stations/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'stations/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'stations/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'stations/load-more' },
    { name: 'reskin', path: 'stations/reskin' },
  ]);

module.exports = config;